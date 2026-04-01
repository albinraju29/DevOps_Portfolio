export const projects = [
  // DevOps — LinkedIn Projects (no GitHub repo)
  {
    id: 1,
    title: "Azure DevOps CI/CD Pipeline",
    description:
      "End-to-end multi-stage CI/CD pipeline using Azure DevOps with automated Dev deployment and manual QA approval gate. Includes PowerShell automation for deployment validation.",
    category: "DevOps",
    tech: ["Azure DevOps", "Git", "PowerShell", "CI/CD"],
    github: null,
    live: null,
    image: null, // Tech icons fallback
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
      "Fully automated AWS cloud infrastructure using modular Terraform scripts, VPC, subnets, EC2, load balancers and security groups, all version controlled via GitHub.",
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
      "Production-ready AWS infrastructure provisioned with Terraform, VPC, EC2, S3, IAM and more.",
    category: "DevOps",
    tech: ["Terraform", "AWS", "HCL"],
    github: "https://github.com/albinraju29/terraform-aws-infra",
    live: null,
    image: null, // Tech icons fallback
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
    image: null,
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
    image: null,
  },
  {
    id: 8,
    title: "Full Stack Docker",
    description:
      "Containerized full stack application with Docker Compose, frontend, backend and database.",
    category: "DevOps",
    tech: ["Docker", "Docker Compose", "JavaScript"],
    github: "https://github.com/albinraju29/full-stack-docker",
    live: null,
    image: null,
  },

  // College Projects
  {
    id: 9,
    title: "MindMap",
    description:
      "AI-powered automated attendance tracking system using facial recognition. Built with Django, MySQL and OpenCV with real-time reporting & personalized dashboards for admins, teachers and students.",
    category: "College",
    tech: ["Django", "MySQL", "OpenCV", "Python", "Machine Learning", "Computer Vision"],
    github: "https://github.com/albinraju29/MindMap",
    live: null,
    image: null,
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
    image: null,
  },
  {
    id: 11,
    title: "Book Genre Classification",
    description:
      "NLP-based book genre classifier using TF-IDF and ML algorithms, Logistic Regression, Naive Bayes, Random Forest and SVM, to predict genres from book descriptions.",
    category: "College",
    tech: ["Python", "Scikit-learn", "NLP", "TF-IDF", "Pandas", "Matplotlib"],
    github: "https://github.com/albinraju29/book-classification",
    live: null,
    image: null,
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
    image: null,
  },
  {
    id: 13,
    title: "Tic Tac Toe",
    description: "Classic Tic Tac Toe browser game built with vanilla JavaScript.",
    category: "Game",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/albinraju29/tictactoe-web",
    live: "https://albinraju29.github.io/tictactoe-web",
    image: null,
  },
  {
    id: 14,
    title: "Snake Game",
    description: "Classic Snake browser game built with vanilla JavaScript.",
    category: "Game",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/albinraju29/snake_game",
    live: "https://albinraju29.github.io/snake_game",
    image: null,
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
    image: null,
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
    image: null,
  },
]