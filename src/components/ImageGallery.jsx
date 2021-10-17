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
      <ImageGalCss />
      {dumdum.map(() => {
        return (
          <div className="mb-4 mx-3">
            <Image className="rounded-lg" src={dummy} />
          </div>
        );
      })}
    </div>
  );
}
