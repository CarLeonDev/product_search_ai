import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { Product } from '@/schemas/products-schema';
import { DeepPartial } from 'ai';

interface ProductCardProps {
  product: DeepPartial<Product>;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="max-w-full flex flex-col items-center justify-center">
      <Card className="flex-1 overflow-hidden py-0 gap-0 rounded-lg border shadow-sm min-w-52 max-w-xs sm:max-w-72 cursor-pointer hover:scale-105 transition-all duration-300">
        <CardHeader className="relative px-0 gap-0">
          {product?.reason && (
            <div className="flex items-center gap-2 px-2 py-2 bg-black/50 text-white text-left" title={product?.reason}>
              <Sparkles width={16} height={16} />
              <p className="flex-1 text-xs line-clamp-1">{product?.reason}</p>
            </div>
          )}
          <img
            className="w-full h-full object-cover aspect-video"
            alt={product?.name}
            src={product?.image}
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/600x400?text=No+image';
            }}
          />
        </CardHeader>

        <CardContent className="flex-1 flex flex-col gap-1 px-4 py-2">
          <CardTitle className="text-md font-bold line-clamp-1" title={product?.name}>{product?.name}</CardTitle>
          <CardDescription className="flex-1 text-xs text-gray-400 line-clamp-5" title={product?.description}>{product?.description}</CardDescription>

          <div className="flex flex-row justify-between gap-2">
            {product?.characteristics?.map((characteristic, index) => (
              <div key={index} title={`${characteristic?.key}: ${characteristic?.value}`}>
                {characteristic?.emoji}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 