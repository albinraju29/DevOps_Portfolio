# DATA.md — All Content for src/data/ Files

This file contains the complete content for all data files in src/data/.
Claude Code must use this file to populate all data files exactly as written.
Never hardcode this content in components — always import from src/data/ files.

---

## experience.js

```js
export const experience = [
  {
    id: 1,
    role: "DevOps Engineer",
    company: "Webandcrafts",
    location: "Thrissur, Kerala, India",
    period: "Jan 2026 – Present",
    type: "Full Time",
    bullets: [
      "Managing Staging, QA and UAT server infrastructure for multiple client projects",
      "Building and maintaining GitLab CI/CD pipelines for automated deployments",
      "Cloud infrastructure management on GCP — backups, snapshots, GCS bucket workflows",
      "Monitoring and alerting with Zabbix, Grafana, Uptime Kuma and PagerDuty",
      "NGINX reverse proxy configuration and Docker containerized deployments",
      "Expanding SRE responsibilities across multiple client environments",
    ],
  },
]
```

---

## education.js

```js
export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Union Christian College",
    location: "Aluva, Kerala, India",
    period: "2023 – 2025",
    grade: null,
    bullets: [
      "Presented UAWID research paper at NCACA 2024 national conference",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Seth Ram Bahadur Singh Gujarati College (SRBS)",
    location: "Mattancherry, Kerala, India",
    period: "Jun 2019 – Jun 2022",
    grade: "Grade B",
    bullets: [
      "Specialized in Computer and Information Sciences",
      "Attended and participated in inter-college tech fests and paper presentations",
      "Hosted college-level tech fests and events",
      "Active in college clubs and volunteering activities",
      "Discovered passion for AI and problem-solving during this period",
    ],
  },
]
```

---

## skills.js

```js
export const skills = [
  {
    category: "Cloud",
    items: ["AWS", "GCP", "Azure"],
  },
  {
    category: "Containers",
    items: ["Docker", "Kubernetes"],
  },
  {
    category: "CI/CD",
    items: ["GitLab CI/CD", "GitLab Runner", "Jenkins", "ArgoCD"],
  },
  {
    category: "IaC",
    items: ["Terraform", "Ansible"],
  },
  {
    category: "Monitoring",
    items: ["Grafana", "Prometheus", "Zabbix", "Uptime Kuma", "PagerDuty"],
  },
  {
    category: "Web Servers",
    items: ["NGINX", "Apache"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Languages",
    items: ["Python", "Bash"],
  },
  {
    category: "Version Control",
    items: ["Git", "GitLab"],
  },
]
```

---

## services.js

```js
export const services = [
  {
    id: 1,
    title: "CI/CD Pipeline Setup",
    description:
      "Design and implement automated pipelines using GitLab CI/CD, GitHub Actions or Jenkins for faster, reliable deployments.",
    icon: "FaGitlab",
  },
  {
    id: 2,
    title: "Cloud Infrastructure Setup",
    description:
      "Provision and manage cloud resources on AWS, GCP or Azure — secure, scalable and cost-efficient.",
    icon: "FaCloud",
  },
  {
    id: 3,
    title: "Server Management & Linux",
    description:
      "Setup, harden and maintain Linux servers — NGINX, Apache, system monitoring and more.",
    icon: "FaServer",
  },
  {
    id: 4,
    title: "Monitoring & Alerting Setup",
    description:
      "Configure Grafana, Prometheus, Zabbix and Uptime Kuma to keep your systems observable 24/7.",
    icon: "FaChartLine",
  },
  {
    id: 5,
    title: "Docker & Kubernetes Setup",
    description:
      "Containerize your applications and orchestrate them with Kubernetes for reliable, scalable deployments.",
    icon: "FaDocker",
  },
  {
    id: 6,
    title: "Automation Scripts",
    description:
      "Write Bash and Python scripts to automate repetitive tasks and reduce manual effort across your infrastructure.",
    icon: "FaTerminal",
  },
  {
    id: 7,
    title: "DevOps Consulting",
    description:
      "Architecture reviews, best practices guidance and DevOps roadmap planning for your team.",
    icon: "FaLightbulb",
  },
  {
    id: 8,
    title: "IaC with Terraform & Ansible",
    description:
      "Define and automate your infrastructure as code — repeatable, version-controlled and reliable.",
    icon: "FaCogs",
  },
]
```

---

## projects.js

```js
export const projects = [
  // DevOps — LinkedIn Projects (no GitHub repo, use tech logo fallback as card visual)
  {
    id: 1,
    title: "Azure DevOps CI/CD Pipeline",
    description:
      "End-to-end multi-stage CI/CD pipeline using Azure DevOps with automated Dev deployment and manual QA approval gate. Includes PowerShell automation for deployment validation.",
    category: "DevOps",
    tech: ["Azure DevOps", "Git", "PowerShell", "CI/CD"],
    github: null,
    live: null,
    image: null, // use tech logo fallback
  },
  {
    id: 2,
    title: "Cloud-Based CI/CD for Containerized Apps",
    description:
      "Full CI/CD pipeline for containerized web apps using Jenkins, Docker, Kubernetes on AWS EC2. Infrastructure managed with Terraform, monitored via Prometheus and Grafana.",
    category: "DevOps",
    tech: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS", "Prometheus", "Grafana"],
    github: null,
    live: null,
    image: null,
  },
  {
    id: 3,
    title: "AWS Infrastructure with Terraform",
    description:
      "Fully automated AWS cloud infrastructure using modular Terraform scripts — VPC, subnets, EC2, load balancers and security groups, all version controlled via GitHub.",
    category: "DevOps",
    tech: ["Terraform", "AWS", "IaC", "GitHub"],
    github: null,
    live: null,
    image: null,
  },
  {
    id: 4,
    title: "Server Automation with Ansible",
    description:
      "Automated AWS EC2 provisioning and configuration using Ansible playbooks and custom Galaxy roles. Deployed NGINX, Docker and security hardening across environments.",
    category: "DevOps",
    tech: ["Ansible", "AWS", "NGINX", "Docker", "Linux"],
    github: null,
    live: null,
    image: null,
  },

  // DevOps — GitHub Repos
  {
    id: 5,
    title: "Terraform AWS Infra",
    description:
      "Production-ready AWS infrastructure provisioned with Terraform — VPC, EC2, S3, IAM and more.",
    category: "DevOps",
    tech: ["Terraform", "AWS", "HCL"],
    github: "https://github.com/albinraju29/terraform-aws-infra",
    live: null,
    image: "https://opengraph.githubassets.com/1/albinraju29/terraform-aws-infra",
  },
  {
    id: 6,
    title: "Ansible Server Automation",
    description:
      "Automated server provisioning and configuration management using Ansible playbooks and roles.",
    category: "DevOps",
    tech: ["Ansible", "Linux", "YAML"],
    github: "https://github.com/albinraju29/ansible-server-automation",
    live: null,
    image: "https://opengraph.githubassets.com/1/albinraju29/ansible-server-automation",
  },
  {
    id: 7,
    title: "Kubernetes Install & Setup",
    description:
      "Scripts and configs for setting up a Kubernetes cluster from scratch on bare Linux servers.",
    category: "DevOps",
    tech: ["Kubernetes", "Bash", "Linux"],
    github: "https://github.com/albinraju29/kubernetes_install-main",
    live: null,
    image: "https://opengraph.githubassets.com/1/albinraju29/kubernetes_install-main",
  },
  {
    id: 8,
    title: "Full Stack Docker",
    description:
      "Containerized full stack application with Docker Compose — frontend, backend and database.",
    category: "DevOps",
    tech: ["Docker", "Docker Compose", "JavaScript"],
    github: "https://github.com/albinraju29/full-stack-docker",
    live: null,
    image: "https://opengraph.githubassets.com/1/albinraju29/full-stack-docker",
  },

  // College Projects
  {
    id: 9,
    title: "MindMap",
    description:
      "AI-powered automated attendance tracking system using facial recognition. Built with Django, MySQL and OpenCV with real-time reporting and personalized dashboards for admins, teachers and students.",
    category: "College",
    tech: ["Django", "MySQL", "OpenCV", "Python", "Machine Learning", "Computer Vision"],
    github: "https://github.com/albinraju29/MindMap",
    live: null,
    image: "https://opengraph.githubassets.com/1/albinraju29/MindMap",
  },
  {
    id: 10,
    title: "City Wide Bike",
    description:
      "Bike-sharing system with ML-based demand prediction using Lasso and Ridge regression. Features real-time tracking and seamless rental management across the city.",
    category: "College",
    tech: ["Python", "Machine Learning", "Lasso Regression", "Ridge Regression"],
    github: "https://github.com/albinraju29/bike-rental-system",
    live: null,
    image: "https://opengraph.githubassets.com/1/albinraju29/bike-rental-system",
  },
  {
    id: 11,
    title: "Book Genre Classification",
    description:
      "NLP-based book genre classifier using TF-IDF and ML algorithms — Logistic Regression, Naive Bayes, Random Forest and SVM — to predict genres from book descriptions.",
    category: "College",
    tech: ["Python", "Scikit-learn", "NLP", "TF-IDF", "Pandas", "Matplotlib"],
    github: "https://github.com/albinraju29/book-classification",
    live: null,
    image: "https://opengraph.githubassets.com/1/albinraju29/book-classification",
  },

  // Games — all hosted on GitHub Pages
  {
    id: 12,
    title: "Neon Tic Tac Toe",
    description: "Neon-styled Tic Tac Toe game built with vanilla JavaScript.",
    category: "Game",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/albinraju29/neon-tic-tac-toe",
    live: "https://albinraju29.github.io/neon-tic-tac-toe",
    image: "https://opengraph.githubassets.com/1/albinraju29/neon-tic-tac-toe",
  },
  {
    id: 13,
    title: "Tic Tac Toe",
    description: "Classic Tic Tac Toe browser game built with vanilla JavaScript.",
    category: "Game",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/albinraju29/tictactoe-web",
    live: "https://albinraju29.github.io/tictactoe-web",
    image: "https://opengraph.githubassets.com/1/albinraju29/tictactoe-web",
  },
  {
    id: 14,
    title: "Snake Game",
    description: "Classic Snake browser game built with vanilla JavaScript.",
    category: "Game",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/albinraju29/snake_game",
    live: "https://albinraju29.github.io/snake_game",
    image: "https://opengraph.githubassets.com/1/albinraju29/snake_game",
  },
  {
    id: 15,
    title: "Flappy Bird",
    description:
      "Flappy Bird clone built in the browser with vanilla JavaScript and Canvas API.",
    category: "Game",
    tech: ["JavaScript", "HTML", "Canvas API"],
    github: "https://github.com/albinraju29/flappy_bird_game",
    live: "https://albinraju29.github.io/flappy_bird_game",
    image: "https://opengraph.githubassets.com/1/albinraju29/flappy_bird_game",
  },
  {
    id: 16,
    title: "Dino Game",
    description:
      "Chrome Dino game clone built in the browser with vanilla JavaScript and Canvas API.",
    category: "Game",
    tech: ["JavaScript", "HTML", "Canvas API"],
    github: "https://github.com/albinraju29/dino_game",
    live: "https://albinraju29.github.io/dino_game",
    image: "https://opengraph.githubassets.com/1/albinraju29/dino_game",
  },
]
```

---

## about.js (personal info used across sections)

```js
export const about = {
  name: "Albin Raju",
  title: "DevOps Engineer & Cloud Infrastructure Specialist",
  tagline:
    "I automate, scale, and monitor infrastructure — so your team can focus on shipping.",
  bio: "I'm Albin Raju — a DevOps Engineer who genuinely loves automating things. With an MCA background and hands-on experience in cloud infrastructure, CI/CD, and monitoring, I help teams build systems that just work. I presented my research at NCACA 2024 and I'm open to remote freelance work — whether it's setting up infra from scratch or cleaning up what's already broken.",
  location: "Thrissur, Kerala, India",
  profilePhoto: "/src/assets/images/profile.jpg",
  resume: "/resume.pdf",
  stats: [
    { value: 15, suffix: "+", label: "Tools & Technologies" },
    { value: 10, suffix: "+", label: "GitHub Repositories" },
    { value: 1, suffix: "", label: "Research Paper at NCACA 2024" },
  ],
  typingTexts: [
    "DevOps Engineer",
    "Cloud Infrastructure Specialist",
    "CI/CD Pipeline Builder",
    "SRE & Monitoring Engineer",
    "Freelance DevOps Consultant",
  ],
  socials: {
    github: "https://github.com/albinraju29",
    linkedin: "https://www.linkedin.com/in/albinraju29",
    email: "albinraju29@gmail.com",
    whatsapp: "https://wa.me/918714373760",
    instagram: "https://instagram.com/albin__raju___",
    twitter: "#", // placeholder — to be updated
  },
  ctaButtons: [
    { label: "Let's Work Together", href: "#contact", variant: "primary" },
    { label: "View My Work", href: "#projects", variant: "secondary" },
    { label: "Download Resume", href: "/resume.pdf", variant: "outline", download: true },
  ],
}
```

---

## Notes for Claude Code
- All `image: null` projects must use a dark card with tech stack logos as fallback visual
- All game projects have live GitHub Pages URLs — always show Live Demo button
- Non-game projects have `live: null` — hide Live Demo button, show GitHub only
- LinkedIn projects have `github: null` — hide GitHub button entirely
- Profile photo must be imported from src/assets/images/profile.jpg
- Resume download links to public/resume.pdf
- Twitter social link is a placeholder "#" — render the icon but link to "#" for now
