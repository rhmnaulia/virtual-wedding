import React from "react";
import Image from "next/image";
import { saveAs } from "file-saver";
import Qris from "../../public/static/images/Qris.jpg";

const Gift = () => {
  const saveFile = () => {
    saveAs("/static/images/Qris.jpg", "QRIS-Indra_Suryadi.jpg");
  };
  return (
    <div className="container bg-choco mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-5xl font-typography font-semibold text-secondary mb-8">
          Gift
        </h1>
        <div className="lg:w-96 w-64 mx-auto">
          <Image
            src={Qris}
            alt="Qris"
            layout="responsive"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>

        <button
          onClick={saveFile}
          className="inline-flex justify-center lg:w-56 w-36 mx-auto mt-6 py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-button bg-secondary hover:bg-transparent hover:border-secondary hover:backdrop-blur-md hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Gift;
