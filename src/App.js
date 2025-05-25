import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader/Preloader';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loader time (in milliseconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); 

    return () => clearTimeout(timer); // Cleanup
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
