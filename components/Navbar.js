import { useState, useEffect } from "react";
import Image from "next/image";
import whitebrand from "../public/static/images/logoputih.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div
      className={
        navbar
          ? "bg-black sticky top-0 md:h-12 z-50 h-16 flex items-center justify-center"
          : "bg-transparent sticky top-0 md:h-12 z-50 h-16 flex items-center justify-center"
      }
    >
      <div className="md:flex md:space-x-10 md:justify-center justify-center py-3">
        <div
          className={
            navbar
              ? "w-48 md:w-48 pt-4 md:pt-3.5 "
              : "w-48 md:w-72 md:mt-12 pt-5 md:pt-3.5 "
          }
        >
          <Image src={whitebrand} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
