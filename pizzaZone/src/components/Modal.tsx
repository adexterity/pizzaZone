import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const modalVariants = {
  hidden: { opacity: 0, y: "-100vh" },
  visible: { opacity: 1, y: 200, transition: { delay: 0.5 } },
};
const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        className="backdrop"
        exit="exit"
      >
        <motion.div className="modal" variants={modalVariants}>
          <p>want to make another pizza</p>
          <Link to="/">
            <button>Start Again</button>
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
