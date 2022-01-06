import Image from "next/image";
import Container from "../components/Container";
import Logo from "../../public/static/images/logo-white.png";

function Thankyou() {
  return (
    <div className="text-center text-palewhite bg-opacity-100 flex flex-col justify-center items-center thankyou-container py-16">
      <Container>
        <div className="px-2">
          <h1 className="text-5xl text-secondary font-typography mb-10 font-semibold">
            Thank You
          </h1>
          <p className="my-5 md:my-2 text-base md:text-xl font-serif">
            Thank you for join us !
          </p>
          <div className="w-40 md:w-36 mt-10 max-w-md mx-auto sm:flex sm:justify-center justify-center">
            <Image src={Logo} alt="I & F Wedding" />
          </div>
          <h1 className="mt-10 text-2xl text-gray-300">#LockedINforDEL</h1>
        </div>
      </Container>
    </div>
  );
}

export default Thankyou;
