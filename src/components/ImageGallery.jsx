import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

import img_1 from "../../public/static/images/carousel/img-1.jpeg";
import img_2 from "../../public/static/images/carousel/img-2.jpg";
import img_3 from "../../public/static/images/carousel/img-3.jpeg";
import img_4 from "../../public/static/images/carousel/img-4.jpg";
import img_5 from "../../public/static/images/carousel/img-5.jpg";
import img_6 from "../../public/static/images/carousel/img-6.jpg";

const images = [
  {
    name: "our moments",
    src: img_1,
  },
  {
    name: "our moments",
    src: img_2,
  },
  {
    name: "our moments",
    src: img_3,
  },
  {
    name: "our moments",
    src: img_4,
  },
  {
    name: "our moments",
    src: img_5,
  },
  {
    name: "our moments",
    src: img_6,
  },
  {
    name: "our moments",
    src: img_2,
  },
  {
    name: "our moments",
    src: img_3,
  },
  {
    name: "our moments",
    src: img_4,
  },
  {
    name: "our moments",
    src: img_5,
  },
];
export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,

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
          <h1 className="text-4xl text-secondary font-semibold text-center pb-8 font-typography">
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
                    className=" rounded-xl   "
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
