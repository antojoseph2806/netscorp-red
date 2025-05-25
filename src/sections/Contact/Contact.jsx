// src/sections/Contact/Contact.jsx
import React from "react";
import styles from "./Contact.module.css";
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub,
  FaHome, FaInfoCircle, FaServicestack, FaUsers,
  FaLaptopCode, FaMobileAlt, FaCode, FaCube,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
  FaBuilding, FaLink, FaTools, FaShareAlt
} from "react-icons/fa";
import FadeIn from "../../components/FadeIn";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <FadeIn>
          <div className={styles.text}>
  <h2>Contact NetScorp</h2>
  <div className={styles.headingLine}></div>
  <p>Feel free to reach out through any of the platforms below.</p>
</div>

        </FadeIn>

        <FadeIn>
          <div className={styles.columns}>
            <div className={styles.col}>
              <div className={styles.iconHeading}>
                <FaBuilding className={styles.sectionIcon} />
                <h3>NetScorp</h3>
              </div>
              <p><FaMapMarkerAlt /> Startups Valley TBI<br />
                Amal Jyothi College of Engineering, Kanjirappally,<br />
                Koovappally P.O, Kerala 686518</p>
              <p><FaPhoneAlt /> +91 9988776655</p>
              <p><FaEnvelope /> support@netscorp.in</p>
            </div>

            <div className={styles.col}>
              <div className={styles.iconHeading}>
                <FaLink className={styles.sectionIcon} />
                <h4>Useful Links</h4>
              </div>
              <ul>
                <li><FaHome /> <a href="#home">Home</a></li>
                <li><FaInfoCircle /> <a href="#about">About us</a></li>
                <li><FaServicestack /> <a href="#services">Services</a></li>
                <li><FaUsers /> <a href="#projects">Projects</a></li>
              </ul>
            </div>

            <div className={styles.col}>
              <div className={styles.iconHeading}>
                <FaTools className={styles.sectionIcon} />
                <h4>Our Services</h4>
              </div>
              <ul>
                <li><FaLaptopCode /> Web Applications</li>
                <li><FaCode /> Web Development</li>
                <li><FaMobileAlt /> Mobile App Development</li>
                <li><FaCube /> Blockchain Development</li>
              </ul>
            </div>

            <div className={styles.col}>
              <div className={styles.iconHeading}>
                <FaShareAlt className={styles.sectionIcon} />
                <h4>Follow NetScorp</h4>
              </div>
              <p>Stay connected with us for the latest updates.</p>
              <div className={styles.socials}>
                <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className={styles.mapWrapper}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13156.900271933364!2d76.81802239999999!3d9.528361799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1747849589035!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
