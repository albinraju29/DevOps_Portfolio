import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060913] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <a href="#home" className="text-2xl font-syne font-bold tracking-tight mb-2">
            <span className="text-white">Albin</span>
            <span className="text-blue-cyan">.</span>
          </a>
          <p className="font-mono text-sm text-gray-400">
            DevOps Engineer & Cloud Specialist
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-gray-400">
          <a href="#about" className="hover:text-white transition-colors font-mono text-sm">About</a>
          <a href="#projects" className="hover:text-white transition-colors font-mono text-sm">Projects</a>
          <a href="#services" className="hover:text-white transition-colors font-mono text-sm">Services</a>
          <a href="#contact" className="hover:text-white transition-colors font-mono text-sm">Contact</a>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/albinraju29" target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/albinraju29" target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-[#0a66c2] transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:albinraju29@gmail.com" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
            <Mail size={18} />
          </a>
          <a href="https://wa.me/918714373760" target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-[#25D366] transition-colors">
            <FaWhatsapp size={18} />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row items-center justify-between font-mono text-xs text-gray-500">
        <p>&copy; {currentYear} Albin Raju. All rights reserved.</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="mt-2 md:mt-0 hover:text-blue-cyan transition-colors flex items-center gap-1 group">
          Back to top <span className="group-hover:-translate-y-1 transition-transform inline-block">↑</span>
        </button>
        <p className="mt-2 md:mt-0">Designed & Built with React + Vite + Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
