import Container from "../components/Container";
import Image from "next/image";
import Link from "next/link";
import groom from "../../public/static/images/groom.jpg";
import bride from "../../public/static/images/bride.jpg";

export default function BrideGroom() {
  return (
    <div className="bg-indigo-100">
      <Container>
        <div className="flex flex-col items-center py-16 px-4 ">
          <h1 className="font-typography text-3xl font-semibold">
            Bride & Groom
          </h1>
          <span className="text-center text-sm md:text-base pt-8 font-serif">
            <p className="pb-4">Lorem ipsum dolor si amet</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates atque blanditiis ducimus est accusamus error adipisci
              maxime.Voluptates atque blanditiis ducimus est accusamus error
              adipisci maxime
            </p>
          </span>

          <div className="flex lg:flex-row flex-col  lg:gap-x-52 pt-12">
            <div className="text-center mb-16 lg:mb-0">
              <div className="mb-4 lg:h-72 lg:w-72 h-64 w-64 mx-auto relative">
                <Image
                  src={groom}
                  alt="Groom"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h1 className="font-typography pb-1 font-medium text-3xl">
                Indra Suryadi
              </h1>
              <p className="font-serif text-sm md:text-base">
                Putra dari Bapak Ang Bun Kim & Ibu Suryani
              </p>
              <span className="flex mt-6 flex-row justify-center text-[#bc2a8d] text-sm md:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#bc2a8d"
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
            </div>

            <div className="text-center">
              <div className="mb-4 lg:h-72 lg:w-72 h-64 w-64 mx-auto relative">
                <Image
                  src={bride}
                  alt="Bride"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h1 className="font-typography pb-1 font-medium text-3xl">
                Fidelia Andrean
              </h1>
              <p className="font-serif text-sm md:text-base">
                Putri dari Bapak Andreas Paulus & Ibu Suzan
              </p>
              <span className="flex mt-6 flex-row justify-center text-[#bc2a8d] text-sm md:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#bc2a8d"
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
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
