import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

const filters = ["All", "DevOps", "College", "Game"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const getCount = (f) => f === "All" ? projects.length : projects.filter(p => p.category === f).length;

  return (
    <section id="projects" className="py-24 relative bg-dark border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Selected Works" subtitle="Projects" />

        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-16 relative z-50">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 relative z-50 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-blue-cyan text-dark font-bold shadow-[0_0_15px_rgba(0,217,255,0.4)] border border-transparent'
                  : 'bg-transparent text-gray-400 border border-white/20 hover:border-white/50 hover:text-white'
              }`}
            >
              {filter} <span className="opacity-60">({getCount(filter)})</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="w-full text-center py-20 font-mono text-gray-500">
            No projects found for this category yet.
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
