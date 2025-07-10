"use client";
import Link from "next/link";
import { delProduct } from "../product-db-create/form-serveractions/product";
import { useOptimistic } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default function ProductDetail({ products }: { products: Product[] }) {
  const [optimisticproducts, setOptimisticproducts] = useOptimistic(
    products,
    (currentProducts, deleteProductId) => {
      return currentProducts.filter(
        (product) => product.id !== deleteProductId
      );
    }
  );
  const removeProductById = async (productId: number) => {
    setOptimisticproducts(productId);
    await delProduct(productId);
  };
  return (
    <ul className="space-y-4 p-4">
      {optimisticproducts.map((product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-lg font-semibold">
            <Link href={`/products-db/${product.id}`}>{product.title}</Link>
          </h2>
          <p className="text-sm">{product.description}</p>
          <p className="text-md font-bold mt-2">${product.price}</p>
          <form action={removeProductById.bind(null, product.id)}>
            <button
              type="submit"
              className="px-4 py-2 mt-4 text-white bg-red-500 hover:bg-red-600"
            >
              Delete
            </button>
          </form>
        </li>
      ))}
    </ul>
  );
}
