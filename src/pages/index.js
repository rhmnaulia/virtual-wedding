import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import HeroHome from "../layouts/HeroHome";
import MusicPlayer from "../components/MusicPlayer.jsx";
import Navbar from "../components/Navbar";
import OurStory from "../layouts/OurStory";
import Landing from "../layouts/Landing";
import Thankyou from "../layouts/Thankyou";
import ImageGallery from "../components/ImageGallery";
import BrideGroom from "../layouts/BrideGroom";
import Guestbook from "../layouts/Guestbook";
import Layout from "../layouts/Layout";
import Venue from "../layouts/Venue";
import RSVP from "../layouts/RSVP";
import Footer from "../components/Footer";
import Livestream from "../layouts/Livestream";
import Gift from "../layouts/Gift";

const Home = ({ weddingInfo }) => {
  const [isLanding, setIsLanding] = useState(true);

  const handleClick = () => {
    setIsLanding(false);
  };

  if (isLanding) {
    return (
      <>
        <Head>
          <title>LOCKEDINFORDEL</title>
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
      <ImageGallery />
      <Venue />
      <RSVP />
      <Guestbook />
      <Gift />
      <Livestream />
      <Thankyou />
      <Footer />
      <MusicPlayer />
    </Layout>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const response = await axios.get(
    `https://karuna-wedding.herokuapp.com/api/wedding-information`
  );

  return {
    props: { weddingInfo: response.data.data.attributes }, // will be passed to the page component as props
  };
}
