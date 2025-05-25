import React from "react";
import styles from "./Services.module.css";
import { FaCode, FaLaptopCode, FaTools, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website Development",
    description: "Building responsive, functional websites tailored to meet client goals and user needs.",
    icon: <FaLaptopCode />,
  },
  {
    title: "UI/UX Design",
    description: "Designing clean and intuitive user interfaces that enhance the user experience.",
    icon: <FaCode />,
  },
  {
    title: "Domain & Hosting Setup",
    description: "Assisting with domain registration, hosting setup, and seamless website deployment.",
    icon: <FaServer />,
  },
  {
    title: "Website Maintenance",
    description: "Providing regular updates, performance checks, and bug fixes to keep websites running smoothly.",
    icon: <FaTools />,
  },
];

// Animation variant for stagger effect
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className={styles.heading}>
          Our Services
          <span className={styles.underline}></span>
        </h2>
        <p className={styles.subheading}>
          At NetScorp, we offer essential web services to help you establish and maintain a strong online presence.
        </p>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={cardVariants}
              custom={index}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
