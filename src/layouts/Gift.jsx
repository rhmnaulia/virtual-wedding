import React from "react";
import Image from "next/image";
import { saveAs } from "file-saver";
import { ImagesStock } from "../components/ImagesStock";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Gift = () => {
  const saveFile = () => {
    saveAs("/static/images/Qris.jpg", "QRIS-Indra_Suryadi.jpg");
  };

  const { ref, inView } = useInView();
  const titleAnimation = useAnimation();
  const qrisAnimation = useAnimation();
  const downloadButtonAnimation = useAnimation();

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
      qrisAnimation.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
      downloadButtonAnimation.start({
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      titleAnimation.start({
        y: -70,
        opacity: 0,
      });
      qrisAnimation.start({
        x: 0,
        scale: 0.5,
        opacity: 0,
      });
      downloadButtonAnimation.start({
        x: 0,
        scale: 0.5,
        opacity: 0,
        transition: {
          duration: 1.2,
        },
      });
    }
  }, [inView]);

  return (
    <div className="container bg-palewhite mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center text-center">
        <motion.h1
          animate={titleAnimation}
          className="text-4xl font-typography font-semibold drop-shadow-sm drop text-secondary mb-8"
        >
          Gift
        </motion.h1>
        <motion.div
          ref={ref}
          animate={qrisAnimation}
          className="lg:w-96 w-52 mx-auto"
        >
          <Image
            src={ImagesStock.qris}
            alt="Qris"
            width="200"
            height="250"
            layout="responsive"
            objectFit="cover"
            className="rounded-xl"
          />
        </motion.div>

        <motion.button
          animate={downloadButtonAnimation}
          onClick={saveFile}
          className="inline-flex drop-shadow-md justify-center lg:w-56 w-36 mx-auto mt-6 py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-button bg-secondary hover:bg-transparent hover:border-secondary hover:backdrop-blur-md hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
        >
          Download
        </motion.button>
      </div>
    </div>
  );
};

export default Gift;
