// src/sections/Services/Services.jsx
import React from "react";
import styles from "./Services.module.css";
import FadeIn from "../../components/FadeIn";
import { FaCode, FaLaptopCode, FaTools, FaServer } from "react-icons/fa";

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

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <FadeIn>
        <h2 className={styles.heading}>
          Our Services
          <span className={styles.underline}></span>
        </h2>
        <p className={styles.subheading}>
          At NetScorp, we offer essential web services to help you establish and maintain a strong online presence.
        </p>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default Services;
