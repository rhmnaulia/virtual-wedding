import { useState } from "react";
import Head from "next/head";
import HeroHome from "../layouts/HeroHome";
import MusicPlayer from "../components/MusicPlayer.jsx";
import Navbar from "../components/Navbar";
import OurStory from "../layouts/OurStory";
import Landing from "../layouts/Landing";
import Thankyou from "../layouts/Thankyou";
import BrideGroom from "../layouts/BrideGroom";
import Guestbook from "../layouts/Guestbook";
import Layout from "../layouts/Layout";
import Venue from "../layouts/Venue";
import RSVP from "../layouts/RSVP";

const Home = () => {
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
    <Layout>
      <Navbar />
      <HeroHome />
      <BrideGroom />
      <OurStory />
      <Guestbook />
      <Venue />
      {/* <RSVP /> */}
      <Thankyou />
      <MusicPlayer />
    </Layout>
  );
};

export default Home;
