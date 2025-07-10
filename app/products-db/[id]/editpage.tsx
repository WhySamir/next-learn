// made this cause cannot use client and async
"use client";

import {
  editProduct,
  FormState,
} from "@/app/product-db-create/form-serveractions/product";
import { useActionState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default function EditProductPageClient({
  product,
}: {
  product: Product;
}) {
  const initialState: FormState = { errors: {} };
  //added id
  const editProductWithId = editProduct.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(
    editProductWithId,
    initialState
  );

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <label className="text-black">Title</label>
        <input
          type="text"
          name="title"
          defaultValue={product?.title}
          className="block w-full p-2 text-black border rounded"
        />
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>

      <div>
        <label className="text-black">Price</label>
        <input
          type="text"
          name="price"
          defaultValue={product?.price.toString()}
          className="block w-full p-2 text-black border rounded"
        />
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>

      <div>
        <label className="text-black">Description</label>
        <input
          type="text"
          name="description"
          defaultValue={product?.description ?? ""}
          className="block w-full p-2 text-black border rounded"
        />
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>

      <button
        disabled={isPending}
        type="submit"
        className="px-4 py-2 bg-blue-500 text-black rounded"
      >
        Update Product
      </button>
    </form>
  );
}
