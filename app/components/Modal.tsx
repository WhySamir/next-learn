"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  // close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back(); // go to previous route
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [router]);

  // close modal on backdrop click
  const handleBackdropClick = () => {
    router.back();
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent closing if modal itself is clicked
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-neutral-900 opacity-90 flex items-center justify-center"
    >
      <div
        onClick={stopPropagation}
        className="bg-white rounded-lg p-6 max-w-3xl w-full relative"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
