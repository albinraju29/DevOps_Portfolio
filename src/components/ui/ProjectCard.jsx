import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub, FaReact, FaAws, FaPython, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaCloud, FaTerminal, FaCode } from 'react-icons/fa';
import {
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiPrometheus,
  SiGrafana,
  SiNginx,
  SiLinux,
  SiJavascript,
  SiDjango,
  SiMysql,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiPandas,
  SiGnubash,
  SiTypescript,
  SiYaml,
} from 'react-icons/si';
import { VscAzureDevops, VscAzure, VscTerminalPowershell } from 'react-icons/vsc';

// Comprehensive tech icon mapping with brand colors
const getTechIcon = (techName) => {
  const t = techName.toLowerCase();
  
  // Cloud & Infrastructure
  if (t.includes('aws') || t.includes('amazon')) return <FaAws size={40} className="text-[#FF9900]" />;

  // Cloud & Infrastructure
  if (t.includes('azure devops')) return <VscAzureDevops size={40} className="text-[#0078D4]" />;
  if (t.includes('azure pipelines')) return <VscAzureDevops size={40} className="text-[#0078D4]" />;
  if (t.includes('azure')) return <VscAzure size={40} className="text-[#0078D4]" />;
  if (t.includes('terraform')) return <SiTerraform size={40} className="text-[#7B42BC]" />;
  if (t.includes('ansible')) return <SiAnsible size={40} className="text-[#EE0000]" />;
  if (t.includes('docker compose') || t.includes('docker-compose')) return <FaDocker size={40} className="text-[#2496ED]" />;
  if (t.includes('docker')) return <FaDocker size={40} className="text-[#2496ED]" />;
  if (t.includes('kubernetes')) return <SiKubernetes size={40} className="text-[#326CE5]" />;
  if (t.includes('nginx')) return <SiNginx size={40} className="text-[#009639]" />;
  if (t.includes('linux')) return <SiLinux size={40} className="text-[#FCC624]" />;
  if (t.includes('jenkins')) return <SiJenkins size={40} className="text-[#D24939]" />;
  if (t.includes('prometheus')) return <SiPrometheus size={40} className="text-[#E6522C]" />;
  if (t.includes('grafana')) return <SiGrafana size={40} className="text-[#F46800]" />;
  if (t.includes('git') && !t.includes('github')) return <FaGitAlt size={40} className="text-[#F05032]" />;
  if (t.includes('github')) return <FaGithub size={40} className="text-[#181717]" />;
  if (t.includes('bash')) return <SiGnubash size={40} className="text-[#4EAA25]" />;
  if (t.includes('powershell')) return <VscTerminalPowershell size={40} className="text-[#5391FE]" />;
  if (t.includes('iac') || t.includes('infrastructure')) return <SiTerraform size={40} className="text-[#7B42BC]" />;
  if (t.includes('hcl')) return <SiTerraform size={40} className="text-[#7B42BC]" />;
  if (t.includes('yaml')) return <SiYaml size={40} className="text-[#CB171E]" />;
  if (t.includes('ci/cd') || t.includes('ci') || t.includes('cd')) return <SiJenkins size={40} className="text-[#D24939]" />;

  // Programming Languages
  if (t.includes('python')) return <FaPython size={40} className="text-[#3776AB]" />;
  if (t.includes('javascript') || t.includes('js')) return <SiJavascript size={40} className="text-[#F7DF1E]" />;
  if (t.includes('typescript') || t.includes('ts')) return <SiTypescript size={40} className="text-[#3178C6]" />;
  if (t.includes('html')) return <FaHtml5 size={40} className="text-[#E34F26]" />;
  if (t.includes('css')) return <FaCss3Alt size={40} className="text-[#1572B6]" />;

  // Frameworks & Libraries
  if (t.includes('django')) return <SiDjango size={40} className="text-[#092E20]" />;
  if (t.includes('react')) return <FaReact size={40} className="text-[#61DAFB]" />;
  if (t.includes('opencv')) return <SiOpencv size={40} className="text-[#5C3EE8]" />;
  if (t.includes('tensorflow')) return <SiTensorflow size={40} className="text-[#FF6F00]" />;
  if (t.includes('scikit') || t.includes('sklearn')) return <SiScikitlearn size={40} className="text-[#F7931E]" />;
  if (t.includes('pandas')) return <SiPandas size={40} className="text-[#150458]" />;
  if (t.includes('matplotlib')) return <span className="text-[#11557C] font-bold text-xl">📊</span>;

  // Databases
  if (t.includes('mysql')) return <SiMysql size={40} className="text-[#4479A1]" />;
  if (t.includes('postgres') || t.includes('postgresql')) return <span className="text-[#4169E1] font-bold text-xl">PG</span>;

  // Machine Learning & Data Science
  if (t.includes('machine learning') || t.includes('ml')) return <SiTensorflow size={40} className="text-[#FF6F00]" />;
  if (t.includes('nlp') || t.includes('natural language')) return <SiTensorflow size={40} className="text-[#FF6F00]" />;
  if (t.includes('computer vision') || t.includes('cv')) return <SiOpencv size={40} className="text-[#5C3EE8]" />;
  if (t.includes('tf-idf')) return <SiScikitlearn size={40} className="text-[#F7931E]" />;

  // Regression / Stats
  if (t.includes('lasso') || t.includes('ridge') || t.includes('regression')) return <SiScikitlearn size={40} className="text-[#F7931E]" />;

  // Canvas / Browser
  if (t.includes('canvas')) return <FaHtml5 size={40} className="text-[#E34F26]" />;

  // Default text fallback with gradient
  return (
    <span className="font-mono text-gray-400 font-bold uppercase text-xl">
      {techName[0]}
    </span>
  );
};

const ProjectCard = ({ project }) => {

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
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
            {(() => {
              const seen = new Set();
              const icons = [];
              
              // First pass: Technical Icons from tech stack
              for (const t of project.tech) {
                const icon = getTechIcon(t);
                if (!icon) continue;
                
                const key = icon.type?.displayName || icon.type?.name || JSON.stringify(icon.props);
                if (seen.has(key)) continue;
                
                seen.add(key);
                icons.push(icon);
                if (icons.length >= 3) break;
              }
              
              // Second pass: Fill with fallbacks if fewer than 3
              const fallbacks = [
                <FaCloud size={40} className="text-blue-cyan/40" />,
                <FaTerminal size={40} className="text-purple-accent/40" />,
                <FaCode size={40} className="text-gray-400/40" />
              ];
              
              for (const fb of fallbacks) {
                if (icons.length >= 3) break;
                const fbKey = fb.type?.displayName || fb.type?.name || JSON.stringify(fb.props);
                if (!seen.has(fbKey)) {
                  icons.push(fb);
                }
              }
              
              return icons.slice(0, 3).map((icon, i) => (
                <div key={i} className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  {icon}
                </div>
              ));
            })()}
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
