import { Product } from '@/schemas/products-schema';
import { ProductCard } from './product-card';
import { DeepPartial } from 'ai';

interface ProductGridProps {
  products: (DeepPartial<Product> | undefined)[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] place-items-stretch gap-4 w-full">
      {products.map((product, index) => product && <ProductCard key={index} product={product} />)}
    </div>
  );
} 