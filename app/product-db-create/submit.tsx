"use client";

import { useFormStatus } from "react-dom";
//useFormStatus,pending,data,action,method
const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="px-4 py-2 bg-blue-500 text-black rounded"
    >
      Add Product
    </button>
  );
};

export default Submit;
