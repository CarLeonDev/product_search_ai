import { z } from 'zod';

/**
 * The schema for a product.
 */
export const ProductSchema = z.object({
  id: z.string().describe('Identifier.'),
  name: z.string().max(100).describe('The comertial name of the product.'),
  description: z.string().max(300).describe('A marketing description of the product.'),
  brand: z.string().describe('The brand of the product.'),
  model: z.string().describe('The model of the product.'),
  price: z.number().describe('The price of the product.'),
  category: z.string().describe('The category of the product.'),
  image: z.string().describe('URL of the image.'),
  shopping_url: z.string().describe('URL to shop.'),
  characteristics: z.array(z.object({
    emoji: z.string(),
    name: z.string(),
    value: z.string(),
  })).describe('All the characteristics of the product.'),
  reason: z.string().max(100).describe('Brief justification tied to the user\'s needs.'),
});
  
/**
 * The type for a product.
 */
export type Product = z.infer<typeof ProductSchema>;

/**
 * The schema for a product.
 */
export const ProductsSchema = z.array(ProductSchema).describe("The products");

/**
 * The type for a product.
 */
export type Products = z.infer<typeof ProductsSchema>;

/**
 * The schema for a product.
 */
export const ProductsResponseSchema = z.object({
  data: ProductsSchema,
});

/**
 * The type for a product.
 */
export type ProductsResponse = z.infer<typeof ProductsResponseSchema>;
