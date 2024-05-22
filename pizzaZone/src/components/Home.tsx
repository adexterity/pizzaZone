import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const buttonVariants = {
  /*  visible: {
    x: [0, -20, 20, -20, 0],
    transition: {delay: 2}
  }, */
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Home = () => {
  const [item, setItem] = useState(true);

  setTimeout(() => {
    setItem(false);
  }, 4000);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
      className="home container"
    >
      <AnimatePresence>
        {item && <motion.h2 exit={{x: 2000}} >Welcome to Pizza Joint</motion.h2>}
      </AnimatePresence>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          /* animate = 'visible' */ whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
