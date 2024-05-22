import { motion } from "framer-motion";

const loaderVariants = {
  animateOne: {
    y: [-10, 10],
    transition: { ease: "easeOut", repeat: Infinity, repeatType: "reverse", duration: .5 },
  },
  animateTwo: {
    y: [10, -10],
    transition: { ease: "easeOut", repeat: Infinity, repeatType: "reverse", duration: .5 },
  },
};

const Loader = () => {
  return (
    <>
      <div>
        <motion.div
          variants={loaderVariants}
          animate="animateOne"
          className="loader"
        ></motion.div>
        <motion.div
          variants={loaderVariants}
          animate="animateTwo"
          className="loader"
        ></motion.div>
      </div>
    </>
  );
};

export default Loader;
