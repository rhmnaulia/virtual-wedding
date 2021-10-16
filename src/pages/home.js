import { useState, useEffect } from "react";
import { withRouter } from "next/router";
import { motion } from "framer-motion";
import HeroHome from "../components/HeroHome";
import MusicPlayer from "../components/MusicPlayer";
import Navbar from "../components/Navbar";
import OurStory from "../components/OurStory";
import { supabase } from "../lib/supabaseClient";

const Home = ({ router }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

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
