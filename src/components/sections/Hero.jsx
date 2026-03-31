import React, { useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TypeAnimation } from 'react-type-animation';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import ParticleBackground from '../ui/ParticleBackground';
import EarthGlobe from '../ui/EarthGlobe';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const globeContainerRef = useRef(null);

  const name = "Albin Raju";
  const nameLetters = name.split("");

  useEffect(() => {
    // Scroll-driven globe animation
    if (globeContainerRef.current) {
      gsap.fromTo(globeContainerRef.current,
        // Explicit start state — scroll = 0, globe fully visible
        { opacity: 1 },
        // End state — fade out only, no movement into next section
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-x-hidden pt-20"
    >
      {/* Backgrounds */}
      <ParticleBackground />
      
      {/* 3D Globe - lazy loaded via Suspense */}
      <div 
        ref={globeContainerRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-[60vh] md:h-screen pointer-events-none opacity-30 md:opacity-100 z-0 overflow-hidden"
      >
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 2]}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance',
          }}
          style={{ background: 'transparent' }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
        >
          <EarthGlobe />
          <Environment preset="city" background={false} />
        </Canvas>
      </Suspense>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start gap-6 pt-10 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="px-4 py-2 rounded-full border border-blue-cyan/30 bg-blue-cyan/5 text-blue-cyan font-mono text-sm uppercase tracking-wider backdrop-blur-md"
          >
            Available for freelance
          </motion.div>

          <h1 className="font-syne leading-tight flex flex-col gap-1">
            <span className="text-white text-3xl md:text-4xl font-medium">
              Hi, I'm
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-cyan via-cyan-400 to-purple-accent inline-block text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight whitespace-nowrap" style={{ textShadow: '0 0 40px rgba(0, 217, 255, 0.3)' }}>
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="inline-block"
                  style={letter === " " ? { width: "0.3em" } : {}}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </h1>

          <div className="h-[40px] md:h-[50px] text-xl md:text-2xl font-mono text-gray-300">
            <TypeAnimation
              sequence={[
                'DevOps Engineer', 2000,
                'Cloud Infrastructure Specialist', 2000,
                'CI/CD Pipeline Builder', 2000,
                'SRE & Monitoring Engineer', 2000,
                'Freelance DevOps Consultant', 2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg text-gray-400 max-w-lg leading-relaxed mt-2"
          >
            "I automate, scale, and monitor infrastructure — so your team can focus on shipping."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-wrap items-center gap-6 mt-6 w-full"
          >
            <a 
              href="#projects" 
              className="px-8 py-4 bg-white text-dark font-syne font-bold text-lg rounded-full hover:bg-transparent hover:text-white border-2 border-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.4)]"
            >
              View Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-transparent text-white border-2 border-[#333] font-syne font-bold text-lg rounded-full hover:border-purple-accent hover:text-purple-accent transition-all"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex items-center gap-6 mt-8 border-t border-white/10 pt-8 w-full md:w-auto"
          >
            <a href="https://github.com/albinraju29" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/albinraju29" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0a66c2] transition-colors hover:scale-110 transform duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:albinraju29@gmail.com" className="text-gray-400 hover:text-blue-cyan transition-colors hover:scale-110 transform duration-300">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-blue-cyan to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
