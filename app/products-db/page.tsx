import { getProducts } from "@/prisma-db";
import ProductDetail from "./product-detail";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductDbpage() {
  const products: Product[] = await getProducts();

  return <ProductDetail products={products} />;
}
