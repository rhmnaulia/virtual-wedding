import Image from "next/image";
import Container from "../components/Container";
import Logo from "../../public/static/images/logo-white.png";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Thankyou() {
  const { ref, inView } = useInView();
  const titleAnimation = useAnimation();
  const thankyouTextAnimation = useAnimation();
  const iconAnimation = useAnimation();

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
      thankyouTextAnimation.start({
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
      iconAnimation.start({
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
      thankyouTextAnimation.start({
        scale: 0.5,
        opacity: 0,
      });
      iconAnimation.start({
        x: 0,
        scale: 0.2,
        opacity: 0,
        transition: {
          duration: 1.2,
        },
      });
    }
  }, [inView]);

  return (
    <div className="text-center text-palewhite bg-opacity-100 flex flex-col justify-center items-center thankyou-container py-16">
      <Container>
        <div ref={ref} className="px-2">
          <motion.h1
            animate={titleAnimation}
            className="text-4xl text-secondary font-typography mb-10 font-semibold"
          >
            Thank You
          </motion.h1>
          <motion.p
            animate={thankyouTextAnimation}
            className="my-5 md:my-2 text-base md:text-xl font-serif"
          >
            Thank you for join us !
          </motion.p>
          <motion.div animate={iconAnimation}>
            <div className="w-40 md:w-36 mt-10 max-w-md mx-auto sm:flex sm:justify-center justify-center">
              <Image src={Logo} alt="I & F Wedding" />
            </div>
            <h1 className="mt-10 text-2xl text-gray-300">#LockedINforDEL</h1>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default Thankyou;
