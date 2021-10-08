import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LayoutWrapper = ({ children }) => {
  return (
    <div className="flex flex-col justify-between">
      <main className="mb-auto">{children}</main>
    </div>
  );
};

export default LayoutWrapper;
