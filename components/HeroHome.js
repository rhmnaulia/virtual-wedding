import { Popover } from "@headlessui/react";
import { MailOpenIcon, ClockIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Countdown from "../components/Countdown";
import Link from "next/link";

export default function HeroHome() {
  const router = useRouter();
  return (
    <div className="relative hero bg-cover overflow-hidden h-screen text-white flex justify-center ">
      <Popover className="relative pt-6 pb-16 sm:pb-24">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav
                className="relative flex items-center  sm:h-10 md:justify-center justify-center"
                aria-label="Global"
              >
                <div className="md:flex md:space-x-10 ">
                  <h1 className="text-xl font-bold text-pink-500">LOGO</h1>
                </div>
              </nav>
            </div>
            <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
              <div className="text-center">
                <h1 className="text-sm tracking-tight md:text-xl">
                  <span className="block xl:inline font-serif tracking-wider">
                    Kami mengundang Anda untuk bergabung di hari bahagia kami
                  </span>
                </h1>
                <div className="w-64 md:w-72 mt-5 max-w-md mx-auto sm:flex sm:justify-center justify-center md:mt-8"></div>
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
              </div>
            </main>
          </>
        )}
      </Popover>
    </div>
  );
  // return (
  //   <div className="relative hero bg-cover overflow-hidden h-screen text-white flex justify-center">
  //     <Popover className="relative pt-6 pb-16 sm:pb-24">
  //       {({ open }) => (
  //         <>
  //           <div className="max-w-7xl mx-auto px-4 sm:px-6">
  //             <nav
  //               className="relative flex items-center  sm:h-10 md:justify-center justify-center"
  //               aria-label="Global"
  //             >
  //               <div className="md:flex md:space-x-10 ">
  //                 <h1 className="text-xl font-bold text-pink-500">LOGO</h1>
  //               </div>
  //             </nav>
  //           </div>

  //           <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
  //             <div className="text-center">
  //               <h1 className="text-sm tracking-tight md:text-xl">
  //                 <span className="block xl:inline">
  //                   Kami mengundang Anda untuk bergabung di hari bahagia kami
  //                 </span>
  //               </h1>

  //               <Countdown />
  //             </div>
  //           </main>
  //         </>
  //       )}
  //     </Popover>
  //   </div>
  // );
}
