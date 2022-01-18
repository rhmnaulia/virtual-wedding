import Image from "next/image";
import { ImagesStock } from "../components/ImagesStock";

function OurStory() {
  return (
    <div className="flex justify-center items-center py-16 flex-col text-palewhite our-story-container">
      <h1 className="text-4xl text-secondary font-typography mb-10 font-semibold">
        Our Story
      </h1>

      <div className="mb-8 h-72 w-72 relative">
        <Image
          src={ImagesStock.ourstory}
          alt="OurPict"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="story flex flex-col w-10/12 lg:w-3/4 text-center text-sm md:text-lg md:px-40 font-serif">
        <p>We knew each other first as a colleague</p>
        <p>in the same Catholic youth community.</p>
        <p className="mb-1 pb-3 ">
          {" "}
          We never expect that we could find each other in a class where we
          barely talked to each other, after class or before, let alone we
          choose to spend the rest of our life together.{" "}
        </p>
        <p className="mb-1 pb-3 ">
          We have a lot of differences in personality, and sometimes in ways of
          thinking, but we believe those enriched our relationship.
        </p>
        <p className="mb-1 pb-3">
          {" "}
          Indra is the type of person who is reserved, calm, and sometimes
          complicated while Fidel is the type of person who is seemly easy to
          engage with, fun-loving, and lively.
        </p>
        <p>
          Although there are many differences, we both managed to bear
          ourselves, developing and committing to becoming a better partner for
          each other, for the rest of our life.
        </p>
      </div>
    </div>
  );
}

export default OurStory;
