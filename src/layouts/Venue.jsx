import React from "react";

function Venue() {
  return (
    <div className="flex justify-center items-center pt-16 pb-20 flex-col text-center bg-transparent">
      <h1 className="text-4xl font-typography mb-8 font-semibold">
        Acara dan Venue
      </h1>
      <div className="story flex flex-col w-10/12 lg:w-3/4 text-center justify-center items-center text-sm md:text-base font-serif text-black ">
        <p className="text-lg font-serif mb-2">Akad Nikah </p>
        <p className="text-lg font-serif mb-2">26 Februari 2022 </p>
        <p className="text-lg font-serif mb-4">
          Pukul <strong>15.00</strong> - <strong>20.00</strong>
        </p>
        <p className="text-sm font-serif mb-1 lg:w-[700px] sm:w-[500px] ">
          Dikarenakan adanya Peraturan Pemerintah terkait PPKM Darurat Jawa &
          Bali, untuk itu kami memohon maaf tidak dapat menyelenggarakan acara
          resepsi penikahan. Acara akad hanya akan dihadiri oleh anggota
          keluarga dan kerabat dekat saja.
        </p>
      </div>
    </div>
  );
}

export default Venue;
