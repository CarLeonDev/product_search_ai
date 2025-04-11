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
You are a helpful assistant that recommends the top ${length} products based on the user's needs.
Rules:
- If the user's needs are not related to products, you should return an empty array.
- Must return the products in the same language as the user's needs.
- Return exactly ${length} products (e.g., if ${length}=5, list 5).
- If fewer than ${length} exist, return all available (e.g., only 3 meet criteria → return 3).
- All the fields are required.
- Omit the words that are not related to the products.
- The products must be related to the user's needs.
- The name of the product must include the brand and model.
- The description of the product must be highlighting the features, benefits, and unique selling points.
- The price of the product must be in USD.
- The characteristics of the product must be more than 5.
- Do not repeat information between the products.
  `;

  return streamObject({
    model: generateModel({
      baseURL: OPENAI_BASE_URL,
      apiKey: OPENAI_API_KEY,
      model: MODEL,
    }),
    schema: ProductsResponseSchema,
    system,
    prompt: `Show a list of ${length} products that match the user's needs: ${prompt}`,
  });
};
