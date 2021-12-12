import { useState, useEffect } from "react";
import { ClockIcon } from "@heroicons/react/solid";
import Countdown from "../components/Countdown";
import Link from "next/link";
import Image from "next/image";
import whitebrand from "../../public/static/images/logoputih.png";

export default function HeroHome() {
  const [brand, setBrand] = useState(true);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setBrand(false);
    } else {
      setBrand(true);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div className="relative header bg-fixed overflow-hidden h-screen text-palewhite flex justify-center ">
      <div className="relative md:pt-6 pb-16 sm:pb-24">
        {brand && (
          <div className="bg-transparent sticky top-0 md:h-12 z-50 h-16 flex items-center justify-center">
            <div className="md:flex md:space-x-10 md:justify-center justify-center py-3">
              <div className="w-48 md:w-72  pt-5 md:pt-3.5 ">
                <Image src={whitebrand} />
              </div>
            </div>
          </div>
        )}
        <main className="mt-36 mx-auto max-w-7xl px-4 ">
          <div className="text-center">
            <h1 className="text-sm tracking-tight md:text-xl">
              <span className="block xl:inline font-serif tracking-wider">
                Undangan Pernikahan
              </span>
            </h1>
            <h1 className="font-typography text-5xl lg:text-6xl py-4 text-accent">
              Indra & Fidelia
            </h1>
            <p>26 Februari 2022 | 09:00 WIB (GMT +7)</p>

            <div className="mt-5  max-w-md mx-auto sm:flex sm:justify-center justify-center md:mt-8 hover:cursor-pointer">
              <div className="rounded-md  flex justify-center">
                <Link
                  href={`https://calendar.google.com/event?action=TEMPLATE&tmeid=NmVjMTgycG5mbjNtdGJiNGt1Z252N2NsZ3MgZTY3YnRjNWg2dnBqMWhpNnU1c3NrMTVvaW9AZw&tmsrc=e67btc5h6vpj1hi6u5ssk15oio%40group.calendar.google.com`}
                >
                  <a
                    target="_blank"
                    className="md:w-full lg:w-full text-center w-64 flex items-center space-x-2 justify-center px-8 py-3  border border-secondary bg-secondary  text-base font-medium rounded-md text-palewhite  hover:bg-gray-300 hover:text-secondary md:py-2 md:text-lg md:px-10"
                  >
                    <ClockIcon className="h-6 w-6" aria-hidden="true" />{" "}
                    <span className="hover:cursor-pointer text-">
                      Remind me
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="mt-3 max-w-md mx-auto sm:flex sm:justify-center justify-center md:mt-5">
              <Countdown />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
