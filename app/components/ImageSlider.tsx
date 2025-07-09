"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { serverSideFunction } from "@/utils/server-utlis";

const ImageSlider = () => {
  const settings = {
    dots: true,
  };
  return (
    <div className="w-90  mx-auto my-0  image-slider-container">
      <Slider {...settings}>
        <div className="relative w-90 ">
          <img
            className="w-full h-full object-cover
          "
            src="/images/boat.jpg"
          />
        </div>
        <div>
          <img src="/images/game.jpg" />
        </div>
        <div>
          <img src="/images/skyline.jpg" />
        </div>
        <div>
          <img src="/images/surfer.jpg" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
