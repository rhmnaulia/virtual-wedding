import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import HeroHome from "../layouts/HeroHome";
import MusicPlayer from "../components/MusicPlayer.jsx";
import Navbar from "../components/Navbar";
import OurStory from "../layouts/OurStory";
import Landing from "../layouts/Landing";
import Thankyou from "../layouts/Thankyou";
import BrideGroom from "../layouts/BrideGroom";
import Guestbook from "../layouts/Guestbook";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isLanding, setIsLanding] = useState(true);

  const handleClick = () => {
    setIsLanding(false);
  };

  if (isLanding) {
    return (
      <>
        <Head>
          <title>FINDELOVE</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Landing btnAction={handleClick} />
      </>
    );
  }
  return (
    <motion.div
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
      <Head>
        <title>FINDELOVE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* SECTION */}
      <Navbar />
      <HeroHome />
      <BrideGroom />
      <OurStory />
      <Guestbook />
      <Thankyou />
      <MusicPlayer />
    </motion.div>
  );
};

export default Home;
