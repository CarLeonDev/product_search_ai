'use client';

import { Header } from '@/components/header';
import { ProductGrid } from '@/components/product-grid';
import { SearchForm } from '@/components/search-form';
import { StatusAlert } from '@/components/status-alert';
import { cn } from '@/lib/utils';
import { ProductsResponse, ProductsResponseSchema } from '@/schemas/products-schema';
import { experimental_useObject as useObject } from '@ai-sdk/react';
import { useState } from 'react';

export default function Home() {
  const [isSearched, setIsSearched] = useState(false);
  const [query, setQuery] = useState('');
  const { object, submit, stop, isLoading, error } = useObject<ProductsResponse>({
    api: '/api/products',
    schema: ProductsResponseSchema,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = e.currentTarget.querySelector('input')?.value ?? '';

    submit({ query, length: 5 });
    setQuery(query);
    setIsSearched(true);
  };

  return (
    <div className={cn("flex flex-col items-center p-4 gap-8", { "justify-center flex-1": !isSearched })}>
      <Header />
      <SearchForm isLoading={isLoading} onSubmit={handleSubmit} onStop={stop} />

      {isSearched && (
        <StatusAlert
          isLoading={isLoading}
          isEmpty={!object?.data?.length}
          error={error}
          onRetry={() => submit({ query, length: 5 })}
        />
      )}

      {object?.data && <ProductGrid products={object.data} />}
    </div>
  );
}
