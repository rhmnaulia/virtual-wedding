import Image from "next/image";
import dummy from "../../public/static/images/jembatan.jpg";

const dumdum = [1, 2, 3, 4, 5];

const ImageGalCss = () => {
  return (
    <style jsx>
      {`
        .imageGal {
          column-count: 3;
          column-gap: 0px;
        }

        @media (max-width: 756px) {
          .imageGal {
            column-count: 2;
            column-gap: 0px;
          }
        }
      `}
    </style>
  );
};

export default function ImageGallery() {
  return (
    <div className="my-5 imageGal">
      <section className="flex justify-center items-center py-8 px-4">
        <div className="flex justify-center flex-wrap -mx-4">
          <div className="md:w-1/2 px-4 mb-8 md:mb-0">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="flex flex-col md:w-1/4  px-4 mb-8 md:mb-0">
            <img
              className="rounded shadow-md mb-2"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
            <img
              className="rounded shadow-md mt-2"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="pt-8 px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="md:w-1/3 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="md:w-1/3 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="md:w-1/3 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="md:w-1/3 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="md:w-1/3 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="md:w-1/3 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="flex flex-wrap -mx-4 -mb-8">
          <div className="md:w-1/4 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="md:w-1/4 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="md:w-1/4 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="md:w-1/4 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="md:w-1/4 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="md:w-1/4 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="md:w-1/4 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="md:w-1/4 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
