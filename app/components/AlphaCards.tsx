"use client";

import { MouseEvent } from "react";

export const AlphaCards = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  className?: string;
}) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`relative w-12 h-12 lg:w-16 lg:h-16 overflow-hidden rounded-xl bg-[#3d3c3d] ${className}`}
      >
        <div
          className={`absolute flex items-center justify-center text-white text-xl capitalize z-[1] opacity-90 rounded-xl inset-0.5   ${className}`}
        >
          {children}
        </div>
        <div className="absolute w-12 h-12 lg:w-16 lg:h-16 bg-black blur-[50px] -left-1/2 -top-1/2"></div>
      </div>
    </>
  );
};
