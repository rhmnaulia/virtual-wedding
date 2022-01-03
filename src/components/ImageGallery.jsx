import Image from "next/image";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

export default function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`https://karuna-wedding.herokuapp.com/api/image-gallery?populate=*`)
      .then((res) => {
        setImages(res.data.data.attributes.img.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          {images.map((image) => {
            return (
              <div
                key={image.id}
                className=" mb-4  h-64 w-64  mx-auto relative"
              >
                <Image
                  src={image.attributes.url}
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
