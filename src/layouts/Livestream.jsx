import Link from "next/link";

function Livestream() {
  return (
    <div className="livestream-container bg-[#16ce5a]  py-5">
      <h1 className="divider razor line  text-5xl pb-3 mx-10 text-center  font-typography font-bold pt-2">
        LiveStream
      </h1>

      <h1 className="font-typography text-center sm:text-left mt-5 sm:text-4xl sm:pl-7 text-3xl pl-2  ">
        Youtube Live
      </h1>
      <div className="flex sm:flex-row flex-col justify-center">
        <div className="flex flex-col items-center  sm:pl-2 w-full sm:w-1/2 video-container mb-5">
          <iframe
            className="w-full h-56 sm:h-[30rem] sm:w-full  p-7"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
          <Link href="https://www.instagram.com/">
            <button className="bg-[#DFD3C3] w-1/2 rounded-xl py-2 font-mono text-xl hover:scale-110">
              Join Youtube
            </button>
          </Link>
        </div>

        <div className="flex flex-col w-full sm:w-1/2 items-center  description-container">
          <h1 className="font-typography text-3xl sm:text-6xl ">
            Zoom Meeting
          </h1>
          <p className="text-center pt-7 pb-5  px-4 sm:text-lg sm:pt-9 sm:px-16  text-sm font-serif">
            Dikarenakan situasi pandemi Covid-19 dan demi keamanan seluruh tamu
            , Acara pemberkatan akan dilakukan secara virtual melalui platform
            zoom. Silahkan bergabung dengan menekan tombol berikut. Terima
            Kasih.
          </p>
          <div className="holy-matrimony-detail text-center font-serif text-base sm:text-xl">
            <h3>Virtual Holy Matrimony</h3>
            <h2 className="pb-2">Indra & Fidelia</h2>
            <p>Sabtu , 26 Februari 2022</p>
            <p className="pb-2">11.00 WIB - Finish</p>

            <p>Gereja ST. Petrus & Paulus</p>
            <p>Jl.Raya Mangga Besar No. 55</p>
            <p className="pb-6">Jakarta Barat</p>
          </div>
          <Link href="https://www.instagram.com/">
            <button className="bg-[#DFD3C3] w-1/2 rounded-xl py-2 font-mono text-xl hover:scale-110">
              Join Zoom
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Livestream;
