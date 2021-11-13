import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>FINDELOVE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
        {children}
      </motion.div>
    </div>
  );
}
