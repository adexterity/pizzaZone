import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  const variantProperty = {
    hidden: {x: "100vw"},
    visible: {x: 0, delay: 1}
  }


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

  return (
    <>
      <motion.div variants={variantProperty} initial='hidden' animate='visible' className="base container">
        <h3>Step 1: Choose Your Base</h3>
        <ul>
          {bases.map((base) => {
            let spanClass = pizza.base === base ? "active" : "";
            return (
              <motion.li whileHover={{scale: 1.3, originX: 0, color: '#f8e112'}} transition={{type: 'spring', stiffness: 300}} key={base} onClick={() => addBase(base)}>
                <span className={spanClass}>{base}</span>
              </motion.li>
            );
          })}
        </ul>

        {pizza.base && (
          <div className="next">
            <Link to="/toppings">
              <motion.button variants={buttonVariants} whileHover="hover">Next</motion.button>
            </Link>
          </div>
        )}
      </motion.div>
    </>
  );
};


/* the buttonVariant inherits the hidden and visible property from the variantProperty variable */
export default Base;
