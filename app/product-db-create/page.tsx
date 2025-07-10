"use client";

import { createProduct, FormState } from "./actions/product";
import Submit from "./submit";
import { useActionState } from "react";
//form with server action

export default function AddProductPage() {
  const initialState: FormState = {
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState
  );

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        {" "}
        <label className="text-black">Title</label>
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="title"
        />
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>
      <div>
        <label className="text-black">Price</label>
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="price"
        />
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>
      <div>
        <label className="text-black">Description</label>
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="description"
        />
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>
      {/* <Submit /> */}
      <button
        disabled={isPending}
        type="submit"
        className="px-4 py-2 bg-blue-500 text-black rounded"
      >
        Add Product
      </button>
    </form>
  );
}
