import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroHome from "../layouts/HeroHome";
import MusicPlayer from "../components/MusicPlayer.jsx";
import Navbar from "../components/Navbar";
import OurStory from "../layouts/OurStory";
import Landing from "../layouts/Landing";
import Thankyou from "../layouts/Thankyou";
import { supabase } from "../lib/supabaseClient";
import { BrideGroom } from "../layouts/BrideGroom";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isLanding, setIsLanding] = useState(true);

  // useEffect(() => {
  //   getData();
  // }, []);

  const getData = async () => {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("guestbook")
        .select(`name,message`);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        console.log(data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  async function addData({ name, message }) {
    try {
      setLoading(true);

      const addGuest = {
        name,
        message,
        created_at: new Date(),
      };

      let { error } = await supabase.from("guestbook").insert(addGuest, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleClick = () => {
    setIsLanding(false);
  };

  if (isLanding) {
    return <Landing btnAction={handleClick} />;
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
      <Navbar />
      <HeroHome />
      <BrideGroom />
      <OurStory />
      <Thankyou />
      <MusicPlayer />
    </motion.div>
  );
};

export default Home;
