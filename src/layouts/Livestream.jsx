import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

function Livestream() {
  const { ref, inView } = useInView();
  const titleAnimation = useAnimation();
  const livestreamDescriptionAnimation = useAnimation();
  const youtubeVideoAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      titleAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          delay: 0.3,
          bounce: 0.5,
        },
      });
      livestreamDescriptionAnimation.start({
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
      youtubeVideoAnimation.start({
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      titleAnimation.start({
        y: -70,
        opacity: 0,
      });
      livestreamDescriptionAnimation.start({
        scale: 0.5,
        opacity: 0,
      });
      youtubeVideoAnimation.start({
        x: 500,
        scale: 0,
        opacity: 0,
        transition: {
          duration: 1.2,
        },
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="livestream-container text-palewhite py-16">
      <motion.h1
        animate={titleAnimation}
        className=" text-secondary font-semibold  text-4xl pb-3 sm:mx-10 text-center  font-typography pt-2"
      >
        LiveStream
      </motion.h1>
      <motion.div
        animate={titleAnimation}
        className="livestream-message text-center pt-7 pb-5  px-4 sm:text-lg sm:pt-9 sm:px-16  text-sm font-serif"
      >
        <p className="pb-6">
          With concern for the COVID- 19 Pandemic situation, our venue should
          limit the number of celebrants. With an abundance of caution and care
          for our guests, we have decided to conduct an intimate reception with
          family members and closest friends.
        </p>
        <p className="pb-6">
          As much as we want everyone to be able to celebrate in person, we do
          ask if you guys can join us virtually. We sincerely appreciate your
          love and support and hope that you celebrate in your heart with best
          wishes from afar.{" "}
        </p>
        <p>With all our loves, Indra & Fidelia.</p>
      </motion.div>
      <div className="pt-12 flex sm:flex-row flex-col justify-center">
        <div className="flex flex-col justify-center w-full sm:w-1/2 items-center  description-container">
          <motion.div
            animate={livestreamDescriptionAnimation}
            className="holy-matrimony-detail text-center font-serif text-base sm:text-2xl"
          >
            <h3>Virtual Holy Matrimony</h3>
            <h2 className="pb-5">Indra & Fidelia</h2>
            <p>Saturday, February 26th 2022</p>
            <p className="pb-5">11.00 WIB - Finish</p>

            <p>St. Petrus & Paulus Church</p>
            <p className="pb-6">Jl. Raya Mangga Besar No. 55 - Jakarta Barat</p>
          </motion.div>
        </div>
        <motion.div
          animate={youtubeVideoAnimation}
          className="flex flex-col items-center pb-12 lg:pb-0 w-full sm:w-1/2 video-container mb-5"
        >
          <iframe
            className="relative m-auto lg:w-[30rem] sm:w-[30rem] xs:w-[80px] my-10 md:w-[30rem] rounded-md shadow-lg"
            src="https://www.youtube.com/embed/ihI9OU7M4x0"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}

export default Livestream;
