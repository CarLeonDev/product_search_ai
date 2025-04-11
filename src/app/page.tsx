'use client';

import { ProductsResponseSchema } from '@/schemas/products-schema';
import { experimental_useObject as useObject } from '@ai-sdk/react';

export default function Home() {
  const { object, submit, stop, isLoading } = useObject({
    api: '/api/products',
    schema: ProductsResponseSchema,
  });

  return (
    <div>
      <button
        onClick={() => submit({ query: "Want a phone for playing games", length: 5 })}
        disabled={isLoading}
      >
        Generate products
      </button>

      {isLoading && (
        <div>
          <div>Loading...</div>
          <button type="button" onClick={() => stop()}>
            Stop
          </button>
        </div>
      )}

      <div className="flex flex-col gap-4">
        {object?.data?.map((product, index) => (
          <div key={index}>
            <p>{product?.name}</p>
            <p>{product?.description}</p>
            <p>{product?.reason}</p>
            <p>{product?.characteristics?.map((characteristic) => characteristic?.emoji).join(' ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}