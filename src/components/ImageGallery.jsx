import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { ImagesStock } from "./ImagesStock";

const images = [
  {
    name: "our moments",
    src: ImagesStock.ourmoment1,
  },
  {
    name: "our moments",
    src: ImagesStock.ourmoment2,
  },
  {
    name: "our moments",
    src: ImagesStock.ourmoment3,
  },
  {
    name: "our moments",
    src: ImagesStock.ourmoment4,
  },
  {
    name: "our moments",
    src: ImagesStock.ourmoment5,
  },
  {
    name: "our moments",
    src: ImagesStock.ourmoment6,
  },
];

export default function ImageGallery() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    lazyLoad: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 4000,
        },
      },
    ],
  };
  return (
    <div className="bg-palewhite pt-12 pb-8 lg:pb-0">
      <div className="h-96 lg:h-[27rem]">
        <h1 className="text-4xl text-secondary drop-shadow-sm font-semibold text-center pb-8 font-typography">
          Our Moments
        </h1>
        <Slider {...settings}>
          {images.map((image, index) => {
            return (
              <div key={index} className=" mb-4  h-64 w-64  mx-auto relative">
                <Image
                  src={image.src}
                  objectFit="cover"
                  layout="fill"
                  className="rounded-xl"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
