import { MailOpenIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../public/static/images/logo-white.png";
import { motion } from "framer-motion";

export default function Landing({ btnAction }) {
  const router = useRouter();

  return (
    <div className="relative landing bg-cover overflow-hidden h-screen text-white flex justify-center items-center">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-16 sm:mt-24">
          <div className="text-center">
            <motion.h1
              animate="visible"
              initial="hidden"
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 2,
                  },
                },
                hidden: {
                  y: -100,
                  opacity: 0,
                },
              }}
              className="text-lg tracking-tight lg:text-2xl"
            >
              <span className="block text-palewhite xl:inline font-serif tracking-wider drop-shadow-xl">
                With pride and joy, we invite you to be a part of our special
                day
              </span>
            </motion.h1>
            <motion.div
              animate="visible"
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 2,
                  },
                },
                hidden: {
                  opacity: 0,
                },
              }}
              className="w-44 md:w-52 mt-7 max-w-md mx-auto sm:flex sm:justify-center justify-center md:mt-8"
            >
              <Image src={logo} alt="I & F Wedding" />
            </motion.div>
            <motion.div
              animate="visible"
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 2,
                  },
                },
                hidden: {
                  opacity: 0,
                },
              }}
              className="mt-5 max-w-md mx-auto b sm:flex sm:justify-center justify-center md:mt-12"
            >
              <div
                className="rounded-md  flex justify-center"
                onClick={btnAction}
              >
                <a className="md:w-full lg:w-full text-center w-64 flex items-center space-x-2 justify-center px-8 py-3  border border-accent  backdrop-blur-md text-base font-medium rounded-md text-white  hover:bg-white hover:text-black md:py-2 md:text-lg md:px-10">
                  <span>Open The Invitation</span>{" "}
                  <MailOpenIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
