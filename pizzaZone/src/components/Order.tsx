import { motion } from "framer-motion";
import { useEffect } from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring', //determines the kind of transition animation applied to the element.
      damping: 8, //Controls how much the spring oscillates. Higher values reduce oscillations
      mass: 0.4, //Affects the weight of the moving object, influencing the spring's response.
      /* stiffness: 100, //Controls the rigidity of the spring. Higher values result in a more rigid spring. 
      velocity: 20, //velocity: Sets the initial velocity of the animation.
      */
     when: 'beforeChildren',
     staggerChildren: 0.4, //allows you to delay the start of animations for child elements within a parent container,

      
    }
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Order = ({ pizza, setShowModal }) => {

useEffect(()=>{
    setTimeout(()=>{
      setShowModal(true);
    }, 4000)
}, [setShowModal])

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container order"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>

      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
