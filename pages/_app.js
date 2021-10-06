import "../styles/globals.css";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
    // key={router.route}
    // initial="initial"
    // animate="animate"
    // variants={{
    //   initial: {
    //     opacity: 0,
    //   },
    //   animate: {
    //     opacity: 1,
    //   },
    // }}
    // initial={{ scaleY: 0 }}
    // animate={{ scaleY: 1 }}
    // exit={{ scaleY: 0 }}
    // transition={{ duration: 0.5 }}
    // key={router.route}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
