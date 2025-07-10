// This is the server component file
import { getProduct } from "@/prisma-db";
import EditProductPageClient from "./editpage";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(parseInt(id));
  if (!product) {
    return notFound();
  }
  return <EditProductPageClient product={product} />;
}
