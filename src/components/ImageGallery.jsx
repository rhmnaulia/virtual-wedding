import Image from "next/image";
import img_2 from "../../public/static/images/ourstory.jpg";
import img_3 from "../../public/static/images/thankyou.jpg";
import img_4 from "../../public/static/images/hero.jpg";
import img_5 from "../../public/static/images/CoupleImage.jpg";
import React, { Component } from "react";
import Slider from "react-slick";
export default class CenterMode extends Component {
  render() {
    const images = [
      {
        name: "gambar1",
        src: img_2,
      },
      {
        name: "gambar2",
        src: img_3,
      },
      {
        name: "gambar3",
        src: img_4,
      },
      {
        name: "gambar4",
        src: img_2,
      },
      {
        name: "gambar5",
        src: img_2,
      },
      {
        name: "gambar5",
        src: img_3,
      },
      {
        name: "gambar5",
        src: img_4,
      },
      {
        name: "gambar5",
        src: img_5,
      },
    ];

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "linear",
      lazyLoad: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 600,
          settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 480,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear",
          },
        },
      ],
    };
    return (
      <div className="bg-palewhite py-12 lg:pb-0">
        <div className="h-96 lg:h-[27rem]">
          <h1 className="text-4xl text-secondary font-semibold text-center pb-8 font-typography">
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
