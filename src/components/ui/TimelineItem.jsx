import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ data, isLeft, index }) => {
  return (
    <div className={`flex w-full ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center justify-between mb-16 relative`}>

      {/* Spacer for desktop layout */}
      <div className="hidden md:block w-[45%]"></div>

      {/* Center Marker */}
      <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dark border-[3px] border-blue-cyan z-10 shadow-[0_0_15px_rgba(0,217,255,0.6)]"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`w-full md:w-[45%] pl-[50px] md:pl-0 ${isLeft ? 'md:text-right' : 'text-left'}`}
      >
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors duration-300 relative group overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-cyan to-purple-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

          <span className="inline-block py-1 px-3 rounded-full bg-blue-cyan/10 text-blue-cyan font-mono text-xs mb-4">
            {data.period}
          </span>
          <h3 className="text-xl font-syne font-bold text-white mb-1">
            {data.role || data.degree}
          </h3>
          <h4 className="text-base font-mono text-gray-400 mb-2">
            {data.company || data.institution}
          </h4>
          {data.location && (
            <p className="text-sm font-mono text-gray-500 mb-4">
              📍 {data.location}
            </p>
          )}
          {data.bullets && data.bullets.length > 0 && (
            <ul className={`text-sm font-mono text-gray-500 leading-relaxed space-y-1 ${isLeft ? 'md:text-right' : 'text-left'}`}>
              {data.bullets.map((bullet, idx) => (
                <li key={idx}>• {bullet}</li>
              ))}
            </ul>
          )}
          {data.description && (
            <p className="text-sm font-mono text-gray-500 leading-relaxed">
              {data.description}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineItem;