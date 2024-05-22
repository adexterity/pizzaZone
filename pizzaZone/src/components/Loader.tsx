import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: { x:{
      duration: 0.5, repeat: Infinity, repeatType: "reverse", 
    }, y: {ease: "easeOut", duration: .25, repeat: Infinity, repeatType: "reverse"} },
  },
  animationTwo: {
    x: [10, -10],
    transition: { ease: "easeOut", repeat: Infinity, repeatType: "reverse", duration: .5 },
  }
}

const Loader = () => {

  const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo')
  return (
    <>
      <div>
        <motion.div
          variants={loaderVariants}
          animate= {animation}
          className="loader"
        ></motion.div>
        {/* <motion.div
          variants={loaderVariants}
          animate="animationTwo"
          className="loader spacing"
        ></motion.div>
        <motion.div
          variants={loaderVariants}
          animate="animationThree"
          className="loader"
        ></motion.div> */}
        <div onClick={()=>cycleAnimation()}>change animation</div>
      </div>
    </>
  );
};

export default Loader;
