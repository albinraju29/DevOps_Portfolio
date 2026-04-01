import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaDocker, FaGitlab, FaGit, FaTerminal, FaPython, FaCloud } from 'react-icons/fa';
import {
  SiGooglecloud,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiAnsible,
  SiGrafana,
  SiPrometheus,
  SiPagerduty,
  SiNginx,
  SiApache,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGnubash,
  SiGit,
  SiGitlab,
  SiArgo,
  SiGithubactions,
} from 'react-icons/si';

// Brand icon + official color map for every skill
const SKILL_ICON_MAP = {
  // Cloud
  'AWS':              { icon: FaAws,           color: '#FF9900' },
  'GCP':              { icon: SiGooglecloud,   color: '#4285F4' },
  'Azure':            { icon: FaCloud,         color: '#0078D4' },
  // Containers
  'Docker':           { icon: FaDocker,        color: '#2496ED' },
  'Kubernetes':       { icon: SiKubernetes,    color: '#326CE5' },
  // CI/CD
  'GitLab CI/CD':     { icon: SiGitlab,        color: '#FC6D26' },
  'GitLab Runner':    { icon: SiGitlab,        color: '#FC6D26' },
  'GitHub Actions':   { icon: SiGithubactions, color: '#2088FF' },
  'Jenkins':          { icon: SiJenkins,       color: '#D33833' },
  'ArgoCD':           { icon: SiArgo,          color: '#EF7B4D' },
  // IaC
  'Terraform':        { icon: SiTerraform,     color: '#7B42BC' },
  'Ansible':          { icon: SiAnsible,       color: '#EE0000' },
  // Monitoring
  'Grafana':          { icon: SiGrafana,       color: '#F46800' },
  'Prometheus':       { icon: SiPrometheus,    color: '#E6522C' },
  'Zabbix':           { icon: FaTerminal,      color: '#CC2936' },
  'Uptime Kuma':      { icon: FaTerminal,      color: '#5CDD8B' },
  'PagerDuty':        { icon: SiPagerduty,     color: '#06AC38' },
  // Web Servers
  'NGINX':            { icon: SiNginx,         color: '#009639' },
  'Apache':           { icon: SiApache,        color: '#D22128' },
  // Databases
  'MySQL':            { icon: SiMysql,         color: '#4479A1' },
  'PostgreSQL':       { icon: SiPostgresql,    color: '#336791' },
  'MongoDB':          { icon: SiMongodb,       color: '#47A248' },
  // Languages
  'Python':           { icon: FaPython,        color: '#3776AB' },
  'Bash':             { icon: SiGnubash,       color: '#4EAA25' },
  // Version Control
  'Git':              { icon: SiGit,           color: '#F05032' },
  'GitLab':           { icon: FaGitlab,        color: '#FC6D26' },
};

const SkillBadge = ({ name, delay = 0 }) => {
  const entry = SKILL_ICON_MAP[name];
  const IconComponent = entry?.icon ?? FaTerminal;
  const iconColor = entry?.color ?? '#00D9FF';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 100,
        delay: delay * 0.05,
      }}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141b2d] border border-white/5 text-gray-300 font-mono text-sm shadow-sm hover:border-blue-cyan/50 hover:text-white hover:bg-blue-cyan/5 hover:shadow-[0_0_15px_rgba(0,217,255,0.15)] transition-all cursor-default group"
    >
      <IconComponent
        size={15}
        style={{ color: iconColor, flexShrink: 0 }}
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <span>{name}</span>
    </motion.div>
  );
};

export default SkillBadge;
