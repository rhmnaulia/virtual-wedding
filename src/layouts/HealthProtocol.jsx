import Image from "next/image";
import Container from "../components/Container";
import Logo from "../../public/static/images/logo.png";

export default function HealthProtocol() {
  return (
    <div className="text-center  text-white bg-opacity-100 flex flex-col justify-center items-center healthProtocol-container">
      <Container >
        <div className="px-2">
          <h1 className="text-5xl m-8 font-typography ">
            Stay Save, Stay Healthy
          </h1>
          <p className="z-10 my-5 md:my-2 text-base md:text-xl font-serif">
            
            
          </p>
        </div>
      </Container>
    </div>
  );
}
