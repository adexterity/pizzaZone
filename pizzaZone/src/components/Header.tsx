import {motion} from 'framer-motion'

const svgVariants = {
  hidden: {
    opacity: 0,
    rotate: -100,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      delay: .5,  ease: 'easeIn'
  }}
}

  const pathVariants ={
    hidden: {
      opacity: 0,
      pathLength: 0
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {delay: 1, ease: 'easeIn', duration: 1}
    }
  }

const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg variants={svgVariants} initial='hidden' animate='visible' className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <motion.path variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <div className="title">
        <motion.h1 initial={{y: "-100vh", opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.2}}>Pizza Joint</motion.h1>
      </div>
    </header>
  )
}

export default Header;