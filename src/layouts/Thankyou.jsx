import Image from "next/image";
import Container from "../components/Container";
import Logo from "../../public/static/images/logo.png";

function Thankyou() {
  return (
    <div className="text-center text-white bg-opacity-100 flex flex-col justify-center items-center thankyou-container">
      <Container>
        <div className="px-2">
          <h1 className="text-5xl m-8 font-typography "> Thank You</h1>
          <p className="my-5 md:my-2 text-base md:text-xl font-serif">
            Terima kasih atas kehadiran , partisipasi dan doa restunya
          </p>
          <strong className="my-5 md:my-2 text-base md:text-xl font-serif">
            Keluarga Besar Mr. Ang Bun Kim & Ms. Suryani
          </strong>
          <p className="my-5 md:my-2 text-base md:text-xl font-serif">
            Sawah Besar - Jakarta Pusat
          </p>
          <p className="my-5 md:my-2 text-lg md:text-xl font-serif">beserta</p>
          <strong className="my-5 md:my-2 text-base md:text-xl font-serif">
            Keluarga Besar Mr. Andreas Paulus & Ms. Suzan
          </strong>
          <p className="my-5 md:my-2 text-base md:text-xl font-serif">
            Sawah Besar - Jakarta Pusat
          </p>
          <div className="w-64 md:w-72 mt-5 max-w-md mx-auto sm:flex sm:justify-center justify-center md:mt-8">
            <Image src={Logo} alt="I & F Wedding" />
          </div>
          <h1 className="m-5 mt-10 text-3xl text-gray-300">#fINDELove</h1>
        </div>
      </Container>
    </div>
  );
}

export default Thankyou;
