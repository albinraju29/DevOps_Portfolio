import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark/80 backdrop-blur-md py-4 shadow-lg shadow-purple-accent/10 border-b border-white/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-syne font-bold tracking-tight z-50">
          <span className="text-white">Albin</span>
          <span className="text-blue-cyan">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-mono text-sm text-gray-300 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-cyan transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
              <a 
                href="https://blog.albinraju.in" 
                target="_blank" 
                rel="noreferrer"
                className="font-mono text-sm text-gray-300 hover:text-white transition-colors"
              >
                Blog
              </a>
            </li>
          </ul>
          <a filter="url(#glow)"
            href="#contact" 
            className="px-5 py-2.5 rounded-full font-mono text-sm font-semibold bg-white/5 border border-white/10 hover:bg-blue-cyan/10 hover:border-blue-cyan hover:text-blue-cyan transition-all text-white backdrop-blur-sm"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-dark/95 backdrop-blur-xl flex flex-col items-center justify-center border-b border-white/10"
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="font-syne text-3xl font-bold text-gray-300 hover:text-blue-cyan transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="https://blog.albinraju.in" 
                  target="_blank" 
                  rel="noreferrer"
                  className="font-syne text-3xl font-bold text-gray-300 hover:text-purple-accent transition-colors relative group"
                >
                  Blog
                </a>
              </li>
              <li className="mt-8">
                  <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-4 rounded-full font-mono text-lg font-bold bg-gradient-to-r from-blue-cyan to-purple-accent text-white shadow-lg shadow-purple-accent/30"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
