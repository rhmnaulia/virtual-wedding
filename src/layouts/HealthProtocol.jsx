import Image from "next/image";
import Container from "../components/Container";
import Logo from "../../public/static/images/logo.png";

export default function HealthProtocol() {
  return (
    <div className="text-center  relative text-white bg-opacity-100 flex flex-col justify-center items-center healthProtocol-container">
        <div >
          <h1 className="text-5xl m-8 font-typography ">
            Stay Save, Stay Healthy
          </h1>
          <p className="z-20 pb-14 my-5 md:my-2 text-base md:text-xl font-serif">
            Dalam rangka Pencegahan dan pengendalian COVID-19 <br />
           pernikahan ini akan diadakan secara daring agar tidak membuat kerumunan
            
          </p>
        </div>
      <div className="absolute h-full w-full bg-black" style={{zIndex:"-1"}}></div>
    </div>
  );
}
