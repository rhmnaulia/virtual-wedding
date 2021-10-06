import { Popover } from "@headlessui/react";
import { ClockIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Image from "next/image";
import Countdown from "../components/Countdown";
import Link from "next/link";
import whitebrand from "../public/static/images/logoputih.png";

export default function HeroHome() {
  const router = useRouter();
  return (
    <div className="relative hero bg-cover overflow-hidden h-screen text-white flex justify-center ">
      <Popover className="relative md:pt-6 pb-16 sm:pb-24">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav
                className="relative flex items-center  sm:h-10 md:justify-center justify-center"
                aria-label="Global"
              >
                <div className="md:flex md:space-x-10 md:justify-center justify-center">
                  <div className="w-48 md:w-1/4 md:mt-8">
                    <Image src={whitebrand} />
                  </div>
                </div>
              </nav>
            </div>
            <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
              <div className="text-center">
                <h1 className="text-sm tracking-tight md:text-xl">
                  <span className="block xl:inline font-serif tracking-wider">
                    Undangan Pernikahan
                  </span>
                </h1>
                <h1 className="font-typography text-5xl py-4">
                  Indra & Fidelia
                </h1>
                <p>26 Februari 2022 | 09:00 WIB (GMT +7)</p>

                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center justify-center md:mt-8 hover:cursor-pointer">
                  <div className="rounded-md  flex justify-center">
                    <Link
                      href={`https://calendar.google.com/event?action=TEMPLATE&tmeid=NmVjMTgycG5mbjNtdGJiNGt1Z252N2NsZ3MgZTY3YnRjNWg2dnBqMWhpNnU1c3NrMTVvaW9AZw&tmsrc=e67btc5h6vpj1hi6u5ssk15oio%40group.calendar.google.com`}
                    >
                      <a
                        target="_blank"
                        className="md:w-full lg:w-full text-center w-64 flex items-center space-x-2 justify-center px-8 py-3  border border-white bg-white text-base font-medium rounded-md text-black  hover:bg-gray-300 hover:text-black md:py-2 md:text-lg md:px-10"
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
          </>
        )}
      </Popover>
    </div>
  );
}
