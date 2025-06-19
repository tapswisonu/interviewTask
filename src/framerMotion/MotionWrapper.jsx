 
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, transition } from "./variants";

const MotionWrapper = ({ children, variant = fadeInUp }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variant}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
