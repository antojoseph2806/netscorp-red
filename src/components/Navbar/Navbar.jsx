import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/netscorp_red.png';

const sections = ['home', 'about', 'services', 'projects', 'contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // adjust for header height
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={activeSection === section ? 'active' : ''}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <div
        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
