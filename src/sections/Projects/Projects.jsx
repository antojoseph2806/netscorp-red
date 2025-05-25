import React from "react";
import styles from "./Projects.module.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Cochin Distributors",
    description: "A professional website developed for a bakery business, Cochin Distributors.",
    image: "https://st.depositphotos.com/1772676/1289/i/450/depositphotos_12895174-stock-photo-bakery-products.jpg",
    github: "",
    demo: "https://cochindistributors.onrender.com/",
  },
  {
    title: "Pollution Testing Centers",
    description: "Informative and service-oriented website for pollution testing centers.",
    image: "https://www.kbb.com/wp-content/uploads/2022/08/close-up-of-a-auto-mechanic-measuring-exhaust-gases-on-a-car-at-picture-id1386424980.jpg?w=918",
    github: "",
    demo: "https://demo.com",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing skills, projects, and contact information.",
    image: "https://colorlib.com/wp/wp-content/uploads/sites/2/victim-portfolio-website-template.jpg",
    github: "",
    demo: "https://www.antojoseph.in/",
  },
];

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

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>
          Our Projects
          <span className={styles.underline}></span>
        </h2>
        <p className={styles.subheading}>
          A selection of our latest work showcasing different technologies and design solutions.
        </p>

        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.demo || "#"}
              className={styles.card}
              target="_blank"
              rel="noreferrer"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <img src={project.image} alt={project.title} />
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.links}>
                  {project.github && <span>GitHub</span>}
                  {project.demo && <span>View website</span>}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
