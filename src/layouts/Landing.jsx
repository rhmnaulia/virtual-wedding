import { MailOpenIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../public/static/images/logo-white.png";

export default function Landing({ btnAction }) {
  const router = useRouter();

  return (
    <div className="relative landing bg-cover overflow-hidden h-screen text-white flex justify-center items-center">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-16 sm:mt-24">
          <div className="text-center">
            <h1 className="text-md tracking-tight lg:text-2xl">
              <span className="block text-palewhite xl:inline font-serif tracking-wider">
                With pride and joy, we invite you to be a part of our special
                day
              </span>
            </h1>
            <div className="w-44 md:w-52 mt-7 max-w-md mx-auto sm:flex sm:justify-center justify-center md:mt-8">
              <Image src={logo} alt="I & F Wedding" />
            </div>
            <div className="mt-5 max-w-md mx-auto b sm:flex sm:justify-center justify-center md:mt-12">
              <div
                className="rounded-md  flex justify-center"
                onClick={btnAction}
              >
                <a className="md:w-full lg:w-full text-center w-64 flex items-center space-x-2 justify-center px-8 py-3  border border-accent  backdrop-blur-md text-base font-medium rounded-md text-white  hover:bg-white hover:text-black md:py-2 md:text-lg md:px-10">
                  <span>Open The Invitation</span>{" "}
                  <MailOpenIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
