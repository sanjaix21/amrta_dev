import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    document.title = "Amrutha Kesavkumar | Data Analyst";
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;