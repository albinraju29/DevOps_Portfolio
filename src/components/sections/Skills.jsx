import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import SkillBadge from '../ui/SkillBadge';
import BentoCard from '../ui/BentoGrid';
import { skills } from '../../data/skills';
import {
  FaCloud, FaDocker, FaGitlab, FaChartLine,
  FaServer, FaDatabase, FaCode, FaGitAlt, FaTerminal
} from 'react-icons/fa';
import { SiTerraform } from 'react-icons/si';

const iconMap = {
  FaCloud: <FaCloud size={32} className="text-blue-cyan" />,
  FaDocker: <FaDocker size={32} className="text-purple-accent" />,
  FaGitlab: <FaGitlab size={32} className="text-blue-cyan" />,
  SiTerraform: <SiTerraform size={32} className="text-purple-accent" />,
  FaChartLine: <FaChartLine size={32} className="text-blue-cyan" />,
  FaServer: <FaServer size={32} className="text-purple-accent" />,
  FaDatabase: <FaDatabase size={32} className="text-blue-cyan" />,
  FaCode: <FaCode size={32} className="text-purple-accent" />,
  FaGitAlt: <FaGitAlt size={32} className="text-blue-cyan" />,
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-dark border-b border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-accent/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -left-48"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading title="My Arsenal" subtitle="Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <BentoCard>
                <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-blue-cyan/5 blur-3xl group-hover:bg-blue-cyan/20 transition-colors duration-500"></div>

                <div className="w-16 h-16 rounded-xl bg-dark border border-white/5 flex items-center justify-center mb-6 relative z-10">
                  {iconMap[category.icon] || <FaTerminal size={32} className="text-white" />}
                </div>

                <h3 className="text-xl font-syne font-bold text-white mb-6 border-b border-white/5 pb-4 flex items-center relative z-10">
                  <span className="w-2 h-2 rounded-full bg-purple-accent mr-3"></span>
                  {category.category}
                </h3>

                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.items.map((item, index) => (
                    <SkillBadge key={item} name={item} delay={index} />
                  ))}
                </div>
              </BentoCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
