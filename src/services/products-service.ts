import { OPENAI_BASE_URL, MODEL, OPENAI_API_KEY } from "@/constants/env";
import { generateModel } from "@/lib/ai";
import { ProductsResponseSchema } from "@/schemas/products-schema";
import { streamObject } from "ai";

/**
 * Get products from the API.
 * @param prompt - The query to search for.
 * @param length - The number of products to return.
 * @returns The products.
 */
export const getProducts = (prompt: string, length: number = 5) => {
  if (!OPENAI_BASE_URL || !OPENAI_API_KEY || !MODEL) {
    throw new Error("Missing environment variables");
  }

  const system = `
You are a helpful assistant that recommends products based on the user's needs.
Rules:
- Must respond in the same language as the user's needs.
- The products must be related to the user's needs.
- If the user's needs are not related to products, you should return an empty array.
- Must return between ${length} and ${Math.min(length * 2, 10)} products.
- Do not repeat information between the products.
- Omit the words that are not related to the products.
- All the fields are required.
- Return id in UUID format.
- The name of the product must include the brand and model.
- The description of the product must be highlighting the features, benefits, and unique selling points.
- The description represents marketing material of the product.
- The price of the product must be in USD.
- The characteristics of the product must be more than 5.
- Each product can have different characteristics between them.
- The characteristics must be a list of features, specifications, benefits, or unique selling points.
- Each characteristic contains a emoji, key and a value.
  - The emoji must be consistent and coherent between products. If one product has a emoji for a characteristic, all the products must have this emoji for the same characteristic. And each characteristic has different emoji between them.
  - The key must be contained in one or two words.
  - The value must be a description of the characteristic.
`;

  return streamObject({
    model: generateModel({
      baseURL: OPENAI_BASE_URL,
      apiKey: OPENAI_API_KEY,
      model: MODEL,
    }),
    schema: ProductsResponseSchema,
    system,
    prompt: `Show a list of products that match the user's needs: ${prompt}`,
    providerOptions: {
      data: {
        stream: true,
      },
    },
    onFinish: ({ object }) => {
      const res = ProductsResponseSchema.safeParse(object);

      if (res.error) {
        throw new Error(res.error.errors.map((e) => e.message).join("\n"));
      }
    },
  });
};
