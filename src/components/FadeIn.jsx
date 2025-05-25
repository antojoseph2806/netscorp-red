import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeIn = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // important: allow repeated triggers
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls.start({ opacity: 0, y: 60 });
    }
  }, [inView,controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
