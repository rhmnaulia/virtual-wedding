import { withRouter } from "next/router";
import { motion } from "framer-motion";
import HeroHome from "../components/HeroHome";
import MusicPlayer from "../components/MusicPlayer";
import Navbar from "../components/Navbar";
import OurStory from "../components/OurStory";

const Home = ({ router }) => {
  return (
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <Navbar />
      <HeroHome />
      <OurStory />
      <MusicPlayer />
    </motion.div>
  );
};

export default withRouter(Home);
