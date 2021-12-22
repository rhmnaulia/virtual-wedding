import Image from "next/image";
import gallery2 from "../../public/static/images/ourstory.jpg";
import gallery3 from "../../public/static/images/thankyou.jpg";
import gallery4 from "../../public/static/images/hero.jpg";
import gallery5 from "../../public/static/images/CoupleImage.JPG";
import React, { Component } from "react";
import Slider from "react-slick";
export default class CenterMode extends Component {
  render() {
    const images = [
      {
        name: "gambar1",
        src: gallery2,
      },
      {
        name: "gambar2",
        src: gallery3,
      },
      {
        name: "gambar3",
        src: gallery4,
      },
      {
        name: "gambar4",
        src: gallery2,
      },
      {
        name: "gambar5",
        src: gallery2,
      },
      {
        name: "gambar5",
        src: gallery3,
      },
      {
        name: "gambar5",
        src: gallery4,
      },
      {
        name: "gambar5",
        src: gallery5,
      },
    ];

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 500,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 500,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 500,
            cssEase: "linear",
          },
        },
      ],
    };
    return (
      <div className="bg-palewhite py-12 lg:pb-0">
        <div className="h-96 lg:h-[27rem]">
          <h1 className="text-4xl text-center pb-8 font-typography">
            Our Moments
          </h1>
          <Slider {...settings}>
            {images.map((image) => {
              return (
                <div className=" mb-4  h-64 w-64  mx-auto relative">
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
