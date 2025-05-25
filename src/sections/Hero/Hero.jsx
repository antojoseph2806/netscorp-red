import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import men from "../../assets/images/logo4.png";

const Hero = () => {
  const fullText = "NetScorp.";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls.start({ opacity: 0, scale: 0.8 });
    }
  }, [inView, controls]);

  useEffect(() => {
    let timer;

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(150);
        if (displayedText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1000);
          return;
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(75);
        if (displayedText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className={styles.hero} ref={ref}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={controls}
      >
        <motion.div className={styles.text}>
          <h1 className={styles.typingHeading}>
            <span className={styles.fixedText}>Welcome to </span>
            <span className={styles.animatedText}>{displayedText}</span>
            <span className={styles.cursor}>|</span>
          </h1>

          <motion.p
            className={styles.subheading}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Your one-stop destination for amazing web experiences.<br />
            We specialize in building responsive, scalable, and user-focused websites.<br />
            Driven by innovation, powered by precision.<br />
            Let’s shape the future of the web—together.
          </motion.p>

          <motion.a
            href="#projects"
            className={styles.cta}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            See Projects
          </motion.a>
        </motion.div>

        <motion.div
          className={styles.image}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={men} alt="Two men coding" className={styles.logo} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
