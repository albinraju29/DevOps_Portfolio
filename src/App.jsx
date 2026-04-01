import React from 'react';
import CustomCursor from './components/ui/AnimatedCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="min-h-screen z-10 relative bg-dark">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Services />
        <Contact />

        {/* Placeholder for others */}
      </main>

      <Footer />
    </>
  );
}

export default App;
