// import siteMetadata from "@/data/siteMetadata";
// import headerNavLinks from "@/data/headerNavLinks";
// import Logo from "@/data/logo.svg";
// import Link from "./Link";
import SectionContainer from "../components/SectionContainer";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const LayoutWrapper = ({ children }) => {
  return (
    <div className="flex flex-col justify-between">
      {/* <Navbar /> */}
      <Hero />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
