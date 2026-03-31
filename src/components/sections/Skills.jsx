import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import SkillBadge from '../ui/SkillBadge';
import { skills } from '../../data/skills';

const Skills = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Clean array
    cardsRef.current = cardsRef.current.slice(0, skills.length);

    // Initialize vanilla-tilt
    cardsRef.current.forEach(card => {
      if (card) {
        VanillaTilt.init(card, {
          max: 5,
          speed: 400,
          glare: true,
          "max-glare": 0.05,
        });
      }
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card && card.vanillaTilt) {
          card.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <section id="skills" className="py-24 relative bg-dark border-b border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-accent/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -left-48"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading title="My Arsenal" subtitle="Skills" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              ref={el => cardsRef.current[idx] = el}
              className="bg-[#0b101e] rounded-2xl p-8 border border-white/10 hover:border-blue-cyan/30 shadow-lg transition-colors duration-300 relative overflow-hidden group"
            >
              {/* Glowing orb in the background */}
              <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-blue-cyan/5 blur-3xl group-hover:bg-blue-cyan/20 transition-colors duration-500"></div>
              
              <h3 className="text-xl font-syne font-bold text-white mb-6 border-b border-white/5 pb-4 flex items-center">
                <span className="w-2 h-2 rounded-full bg-purple-accent mr-3"></span>
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.items.map((item, index) => (
                  <SkillBadge key={item} name={item} delay={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
