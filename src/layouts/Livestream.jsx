import Link from "next/link";

function Livestream() {
  return (
    <div className="livestream-container text-palewhite py-16">
      <h1 className=" text-secondary font-semibold  text-4xl pb-3 sm:mx-10 text-center  font-typography pt-2">
        LiveStream
      </h1>
      <div className="livestream-message text-center pt-7 pb-5  px-4 sm:text-lg sm:pt-9 sm:px-16  text-sm font-serif">
        <p className="pb-6">
          With concern for the COVID- 19 Pandemic situation, our venue should
          limit the number of celebrants. With an abundance of caution and care
          for our guests, we have decided to conduct an intimate reception with
          family members and closest friends.
        </p>
        <p className="pb-6">
          As much as we want everyone to be able to celebrate in person, we do
          ask if you guys can join us virtually. We sincerely appreciate your
          love and support and hope that you celebrate in your heart with best
          wishes from afar.{" "}
        </p>
        <p>With all our loves, Indra & Fidelia.</p>
      </div>
      <div className="pt-12 flex sm:flex-row flex-col justify-center">
        <div className="flex flex-col justify-center w-full sm:w-1/2 items-center  description-container">
          <div className="holy-matrimony-detail text-center font-serif text-base sm:text-2xl">
            <h3>Virtual Holy Matrimony</h3>
            <h2 className="pb-5">Indra & Fidelia</h2>
            <p>Saturday, February 26th 2022</p>
            <p className="pb-5">11.00 WIB - Finish</p>

            <p>St. Petrus & Paulus Church</p>
            <p className="pb-6">Jl. Raya Mangga Besar No. 55 - Jakarta Barat</p>
          </div>
        </div>
        <div className="flex flex-col items-center pb-12 lg:pb-0 w-full sm:w-1/2 video-container mb-5">
          <iframe
            className="relative m-auto lg:w-[30rem] sm:w-[30rem] xs:w-[80px] my-10 md:w-[30rem] rounded-md shadow-lg"
            src="https://www.youtube.com/embed/ihI9OU7M4x0"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Livestream;
