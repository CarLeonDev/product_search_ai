'use client';

import { Header } from '@/components/header';
import { ProductGrid } from '@/components/product-grid';
import { SearchForm } from '@/components/search-form';
import { StatusAlert } from '@/components/status-alert';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ProductsResponse, ProductsResponseSchema } from '@/schemas/products-schema';
import { experimental_useObject as useObject } from '@ai-sdk/react';
import { useState } from 'react';

export default function Home() {
  const [isSearched, setIsSearched] = useState(false);
  const { object, submit, stop, isLoading, error } = useObject<ProductsResponse>({
    api: '/api/products',
    schema: ProductsResponseSchema,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = e.currentTarget.querySelector('input')?.value;
    submit({ query: query ?? '', length: 5 });
    setIsSearched(true);
  };

  return (
    <div className={cn("flex flex-col items-center p-4 gap-8 w-full max-w-2xl mx-auto", { "justify-center h-screen": !isSearched })}>
      <Header />
      <SearchForm isLoading={isLoading} onSubmit={handleSubmit} onStop={stop} />

      {isLoading && <StatusAlert type="loading" />}
      {error && <StatusAlert type="error" error={error} onRetry={() => submit({ query: '', length: 5 })} />}
      {!error && !isLoading && isSearched && (!object || object?.data?.length === 0) && <StatusAlert type="empty" />}

      {object?.data && <ProductGrid products={object.data} />}
    </div>
  );
}
