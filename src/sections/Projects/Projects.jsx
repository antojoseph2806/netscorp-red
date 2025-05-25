// src/sections/Projects/Projects.jsx
import React from "react";
import styles from "./Projects.module.css";
import FadeIn from "../../components/FadeIn";

const projects = [
  {
    title: "Cochin Distributors",
    description: "A professional website developed for a bakery business, Cochin Distributors.",
    image: "https://st.depositphotos.com/1772676/1289/i/450/depositphotos_12895174-stock-photo-bakery-products.jpg",
    github: "",
    demo: "https://cochindistributors.onrender.com/", // add your actual URL or leave as "#" if not live
  },
  {
    title: "Pollution Testing Centers",
    description: "Informative and service-oriented website for pollution testing centers.",
    image: "https://www.kbb.com/wp-content/uploads/2022/08/close-up-of-a-auto-mechanic-measuring-exhaust-gases-on-a-car-at-picture-id1386424980.jpg?w=918",
    github: "",
    demo: "https://pollutiontesting.com", // add your actual URL or leave as "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing skills, projects, and contact information.",
    image: "https://colorlib.com/wp/wp-content/uploads/sites/2/victim-portfolio-website-template.jpg",
    github: "",
    demo: "https://www.antojoseph.in/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <FadeIn>
        <h2>
          Our Projects
          <span className={styles.underline}></span>
        </h2>
        <p className={styles.subheading}>
          A selection of our latest work showcasing different technologies and design solutions.
        </p>
        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.demo || "#"}
              className={styles.card}
              target="_blank"
              rel="noreferrer"
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
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
