import Container from "../components/Container";
import Image from "next/image";
import Link from "next/link";
import { ImagesStock } from "../components/ImagesStock";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";

export default function BrideGroom() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const brideAnimation = useAnimation();
  const brideGroomLayout = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          delay: 0.3,
          bounce: 0.5,
        },
      });
      brideAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          delay: 0.3,
          bounce: 0.5,
        },
      });
      brideGroomLayout.start({
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: -70,
        opacity: 0,
      });
      brideAnimation.start({
        y: 70,
        opacity: 0,
      });
      brideGroomLayout.start({
        y: 0,
        scale: 0,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <div className="bg-primary text-palewhite">
      <Container>
        <div className="flex flex-col items-center py-16 px-4 ">
          <motion.h1
            animate={brideGroomLayout}
            className="font-typography text-4xl text-secondary font-semibold"
          >
            Bride & Groom
          </motion.h1>
          <motion.span
            animate={brideGroomLayout}
            className="text-center text-sm md:text-base pt-8 font-serif"
          >
            <p className="pb-4"> Philippians 1 : 3</p>
            <p>I thank my God every time I remember you.</p>
          </motion.span>

          <div
            ref={ref}
            className="flex lg:flex-row flex-col  lg:gap-x-52 pt-12"
          >
            <motion.div
              animate={animation}
              className="text-center mb-16 lg:mb-0"
            >
              <div className="mb-4 lg:h-72 lg:w-72 h-64 w-64 mx-auto relative">
                <Image
                  src={ImagesStock.groom}
                  alt="Groom"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h1 className="font-typography pb-1 text-secondary font-medium text-3xl">
                Indra Suryadi
              </h1>
              <p className="font-serif text-sm md:text-base">
                Son of Mr. Bunnady & Mrs. Sumarni
              </p>
              <span className="flex mt-6 flex-row justify-center text-[#FFD1DC] text-sm  md:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFD1DC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <Link href="https://www.instagram.com/indrasuryadi_/">
                  <a target="_blank" rel="noopener noreferrer" className="pl-1">
                    indrasuryadi_
                  </a>
                </Link>
              </span>
            </motion.div>

            <motion.div
              animate={brideAnimation}
              ref={ref}
              className="text-center"
            >
              <div className="mb-4 lg:h-72 lg:w-72 h-64 w-64 mx-auto relative">
                <Image
                  src={ImagesStock.bride}
                  alt="Bride"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h1 className="font-typography pb-1 font-medium text-3xl text-secondary">
                Fidelia Andrean
              </h1>
              <p className="font-serif text-sm md:text-base">
                Second Daughter of Mr. Tjin Ay Fha & Mrs. Suzan Siu Lany
              </p>
              <span className="flex mt-6 flex-row justify-center text-[#FFD1DC] text-sm md:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFD1DC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <Link href="https://www.instagram.com/fideliaandrean/">
                  <a target="_blank" rel="noopener noreferrer" className="pl-1">
                    fideliaandrean
                  </a>
                </Link>
              </span>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
