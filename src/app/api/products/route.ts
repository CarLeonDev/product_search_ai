import { getProducts } from "@/services/products-service";


export async function POST(req: Request) {
  try {
    const { query, length } = await req.json();
    return getProducts(query, length).toTextStreamResponse();
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
