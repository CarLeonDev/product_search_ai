import { getProducts } from "@/services/products-service";

export async function POST(req: Request) {
  try {
    const { query, length } = await req.json();
    const productsStream = getProducts(query, length);
    return productsStream.toTextStreamResponse();
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
