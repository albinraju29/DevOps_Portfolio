import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaDocker, FaAws, FaPython, FaJava, FaReact, FaGithub } from 'react-icons/fa';
import { SiKubernetes, SiSpringboot, SiMysql, SiUnity } from 'react-icons/si';

// Helper for fallback icons
const getTechIcon = (techName) => {
  const t = techName.toLowerCase();
  if (t.includes('docker')) return <FaDocker size={40} className="text-[#2496ED]" />;
  if (t.includes('kubernetes')) return <SiKubernetes size={40} className="text-[#326CE5]" />;
  if (t.includes('aws')) return <FaAws size={40} className="text-[#FF9900]" />;
  if (t.includes('python')) return <FaPython size={40} className="text-[#3776AB]" />;
  if (t.includes('java')) return <FaJava size={40} className="text-[#007396]" />;
  if (t.includes('react')) return <FaReact size={40} className="text-[#61DAFB]" />;
  if (t.includes('spring')) return <SiSpringboot size={40} className="text-[#6DB33F]" />;
  if (t.includes('mysql')) return <SiMysql size={40} className="text-[#4479A1]" />;
  if (t.includes('unity')) return <SiUnity size={40} className="text-[#ffffff]" />;

  // Default text fallback
  return <span className="font-mono text-gray-400 font-bold uppercase text-xl">{techName[0]}</span>;
};

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 8,
        speed: 400,
        glare: true,
        "max-glare": 0.15,
      });
    }
    return () => {
      if (cardRef.current && cardRef.current.vanillaTilt) {
        cardRef.current.vanillaTilt.destroy();
      }
    }
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      ref={cardRef}
      className="bg-[#0b101e] rounded-xl border border-white/10 hover:border-blue-cyan/40 shadow-lg hover:shadow-[0_0_20px_rgba(0,217,255,0.15)] overflow-hidden flex flex-col h-full group"
    >
      {/* Image or Fallback */}
      <div className="w-full aspect-[16/9] bg-[#060913] relative border-b border-white/5 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center gap-6 bg-gradient-to-br from-[#141b2d] to-[#080d1a]">
            {project.tech.slice(0, 3).map((t, i) => (
              <div key={i} className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                {getTechIcon(t)}
              </div>
            ))}
          </div>
        )}

        {/* Category Overlay */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-dark/80 backdrop-blur-sm border border-white/10 text-xs font-mono text-gray-300">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-syne font-bold text-white mb-3 group-hover:text-blue-cyan transition-colors">
          {project.title}
        </h3>
        <p className="text-sm font-mono text-gray-400 mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-1 rounded bg-white/5 text-xs font-mono text-gray-400 border border-white/5">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={16} /> Code
            </a>
          )}
          {project.live && project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-mono text-blue-cyan hover:text-white transition-colors ml-auto"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
