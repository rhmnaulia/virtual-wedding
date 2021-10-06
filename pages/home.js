import { withRouter } from "next/router";
import { motion } from "framer-motion";
import HeroHome from "../components/HeroHome";

const home = ({ router }) => {
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
      <HeroHome />
    </motion.div>
  );
};

export default withRouter(home);
