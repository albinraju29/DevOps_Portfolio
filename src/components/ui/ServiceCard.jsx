import React from 'react';
import { motion } from 'framer-motion';
import { FaGitlab, FaCloud, FaServer, FaChartLine, FaDocker, FaTerminal, FaLightbulb, FaCogs } from 'react-icons/fa';

const iconMap = {
  FaGitlab: <FaGitlab size={32} className="text-blue-cyan" />,
  FaCloud: <FaCloud size={32} className="text-blue-cyan" />,
  FaServer: <FaServer size={32} className="text-purple-accent" />,
  FaChartLine: <FaChartLine size={32} className="text-blue-cyan" />,
  FaDocker: <FaDocker size={32} className="text-purple-accent" />,
  FaTerminal: <FaTerminal size={32} className="text-blue-cyan" />,
  FaLightbulb: <FaLightbulb size={32} className="text-purple-accent" />,
  FaCogs: <FaCogs size={32} className="text-blue-cyan" />,
};

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className="p-8 rounded-2xl bg-[#0b101e] border border-white/10 hover:border-blue-cyan/30 shadow-lg hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,217,255,0.1)] transition-all duration-300 group cursor-default h-full flex flex-col relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-cyan/5 blur-[50px] group-hover:bg-purple-accent/10 transition-colors duration-500 rounded-full"></div>

      <div className="w-16 h-16 rounded-xl bg-dark border border-white/5 flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 shadow-inner relative z-10">
        {iconMap[service.icon] || <FaCogs size={32} className="text-white" />}
      </div>

      <h3 className="text-xl font-syne font-bold text-white mb-3 relative z-10">
        {service.title}
      </h3>

      <p className="font-mono text-sm text-gray-400 leading-relaxed flex-grow relative z-10">
        {service.description}
      </p>

      {/* Decorative line */}
      <div className="mt-8 pt-4 border-t border-white/5 w-full relative z-10">
        <div className="h-[2px] w-8 bg-gradient-to-r from-blue-cyan to-purple-accent transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;