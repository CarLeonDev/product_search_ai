import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { Product } from '@/schemas/products-schema';
import { DeepPartial } from 'ai';
import { IMAGE_PLACEHOLDER } from '@/constants/common';

interface ProductCardProps {
  product: DeepPartial<Product>;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card
      data-testid={`product-card`}
      className="flex-1 mx-auto overflow-hidden py-0 gap-0 rounded-lg border shadow-sm min-w-52 max-w-xs sm:max-w-72 cursor-default hover:scale-105 transition-all duration-300"
    >
      <CardHeader className="relative px-0 gap-0">
        {product?.reason && (
          <div data-testid="product-card-reason" className="absolute top-0 left-0 gap-2 px-2 py-2 bg-black/50 hover:bg-black text-white text-left group">
            <Sparkles className="float-left mr-2" width={16} height={16} />
            <p className="flex-1 text-xs line-clamp-1 group-hover:line-clamp-none">{product?.reason}</p>
          </div>
        )}
        {/* eslint-disable @next/next/no-img-element */}
        <img
          data-testid="product-card-image"
          alt={product?.name ?? ''}
          className="w-full h-full object-cover aspect-square"
          src={encodeURI(`https://th.bing.com/th?q=${product?.name}`)}
          onError={(e) => {
            e.currentTarget.src = IMAGE_PLACEHOLDER;
          }} />
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-1 px-4 py-2">
        <CardTitle data-testid="product-card-name" className="text-md font-bold line-clamp-1" title={product?.name}>{product?.name}</CardTitle>
        <CardDescription data-testid="product-card-description" className="flex-1 text-xs text-gray-400 line-clamp-5" title={product?.description}>{product?.description}</CardDescription>

        <div data-testid="product-card-characteristics" className="flex flex-row justify-between gap-2">
          {product?.characteristics?.slice(0, 5).map((characteristic, index) => (
            <div data-testid={`product-card-characteristic`} key={index} title={`${characteristic?.key}: ${characteristic?.value}`}>
              {characteristic?.emoji}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 