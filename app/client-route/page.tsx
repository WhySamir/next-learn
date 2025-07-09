"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "../components/theme-provider";
import { clientSideFunction } from "@/utils/client-utlis";
// import { serverSideFunction } from "@/utils/server-utlis";

const page = () => {
  const theme = useTheme();
  const result = clientSideFunction();
  const settings = {
    dots: true,
  };

  return (
    <div
      style={{
        backgroundColor: theme.colors.primary,
        color: theme.colors.secondary,
      }}
      className="w-90  mx-auto my-0  image-slider-container"
    >
      <h1>hero</h1>
      <p>{result}</p>
    </div>
  );
};

export default page;
