import Link from "next/link";

function Livestream() {
  return (
    <div className="livestream-container text-palewhite py-16">
      <h1 className=" text-secondary font-semibold  text-5xl pb-3 sm:mx-10 text-center  font-typography pt-2">
        LiveStream
      </h1>

      <div className="pt-16 flex sm:flex-row flex-col justify-center">
        <div className="flex flex-col items-center pb-12 lg:pb-0 w-full sm:w-1/2 video-container mb-5">
          <h1 className="font-serif font-semibold text-3xl sm:text-4xl">
            Youtube Live
          </h1>
          <iframe
            className="relative m-auto lg:w-[30rem] sm:w-[30rem] xs:w-[80px] my-10 md:w-[30rem] rounded-md shadow-lg"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
          <Link href="https://www.youtube.com/embed/tgbNymZ7vqY">
            <button className="bg-secondary w-1/2 rounded-md py-2  text-lg hover:scale-110">
              Join Youtube
            </button>
          </Link>
        </div>

        <div className="flex flex-col w-full sm:w-1/2 items-center  description-container">
          <h1 className="font-serif font-semibold text-3xl sm:text-4xl ">
            Zoom Meeting
          </h1>
          <p className="text-center pt-7 pb-5  px-4 sm:text-lg sm:pt-9 sm:px-16  text-sm font-serif">
            Dikarenakan situasi pandemi Covid-19 dan demi keamanan seluruh tamu,
            Acara pemberkatan akan dilakukan secara virtual melalui platform
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
            <button className="bg-secondary w-1/2 rounded-md py-2 text-lg hover:scale-110">
              Join Zoom
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Livestream;
