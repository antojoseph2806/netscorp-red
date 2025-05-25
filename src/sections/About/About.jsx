import React, { useEffect } from "react";
import styles from "./About.module.css";
import aboutImage from "../../assets/images/logo5.png";
import { Code, Users } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
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
      controls.start({ opacity: 0, y: 60 }); // reset when out of view
    }
  }, [inView]);

  return (
    <section id="about" className={styles.about} ref={ref}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 60 }}
        animate={controls}
      >
        <h1 className={styles.sectionHeading}>
          About Us
          <span className={styles.underline}></span>
        </h1>

        <div className={styles.image}>
          <img src={aboutImage} alt="About Us" className={styles.photo} />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>Laying the Foundation for Digital Innovation</h2>
          <p className={styles.description}>
            At NetScorp, we're a team of aspiring developers taking our first steps into the exciting world of web development. We're passionate about learning, building, and growing—one line of code at a time.
          </p>

          <div className={styles.featureBox}>
            <div className={styles.icon}><Code size={24} color="#ffffff" /></div>
            <div>
              <h3 className={styles.subheading}>Hands-On Learning</h3>
              <p className={styles.subtext}>
                We believe in learning by doing—exploring real-world projects that sharpen our skills and creativity.
              </p>
            </div>
          </div>

          <div className={styles.featureBox}>
            <div className={styles.icon}><Users size={24} color="#ffffff" /></div>
            <div>
              <h3 className={styles.subheading}>Team Collaboration</h3>
              <p className={styles.subtext}>
                Working together as a team, we exchange ideas and grow through shared knowledge and experience.
              </p>
            </div>
          </div>

          <div className={styles.featureBox}>
            <div className={styles.icon}><Code size={24} color="#ffffff" /></div>
            <div>
              <h3 className={styles.subheading}>Early Innovation</h3>
              <p className={styles.subtext}>
                Even as we begin, we're experimenting with simple but creative solutions that reflect our drive to make an impact.
              </p>
            </div>
          </div>

          <p className={styles.finalText}>
            NetScorp is more than just a name—it's a mindset. As we continue our journey, we're focused on building meaningful web experiences, nurturing our skills, and embracing every opportunity to grow in the tech world.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
