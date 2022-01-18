import React from "react";
import Image from "next/image";
import { saveAs } from "file-saver";
import { ImagesStock } from "../components/ImagesStock";

const Gift = () => {
  const saveFile = () => {
    saveAs("/static/images/Qris.jpg", "QRIS-Indra_Suryadi.jpg");
  };
  return (
    <div className="container bg-palewhite mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-4xl font-typography font-semibold drop-shadow-sm drop text-secondary mb-8">
          Gift
        </h1>
        <div className="lg:w-96 w-64 mx-auto">
          <Image
            src={ImagesStock.qris}
            alt="Qris"
            width="200"
            height="300"
            layout="responsive"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>

        <button
          onClick={saveFile}
          className="inline-flex drop-shadow-md justify-center lg:w-56 w-36 mx-auto mt-6 py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-button bg-secondary hover:bg-transparent hover:border-secondary hover:backdrop-blur-md hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Gift;
