# STRUCTURE.md — Folder Structure

## Root
```
albinraju-portfolio/
├── public/                  # Static assets served directly
│   ├── favicon.ico          # Browser tab icon
│   ├── og-image.png         # Social media preview image (1200x630)
│   └── resume.pdf           # Downloadable resume/CV
├── src/                     # All source code
├── .env                     # Environment variables (never commit)
├── .gitignore               # Git ignore rules
├── index.html               # Vite entry HTML
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── CLAUDE.md                # Claude Code instructions
├── BRIEF.md                 # Project overview
├── STACK.md                 # Tech stack details
├── STRUCTURE.md             # This file
└── PROGRESS.md              # Build progress tracker
```

## src/
```
src/
├── assets/
│   └── images/
│       └── profile.jpg      # Profile photo (drop here, exact name)
├── components/
│   ├── layout/              # Global layout components
│   │   ├── Navbar.jsx       # Top navigation bar
│   │   └── Footer.jsx       # Bottom footer
│   ├── sections/            # One file per page section
│   │   ├── Hero.jsx         # Hero section with 3D globe
│   │   ├── About.jsx        # About with photo + bio + stats
│   │   ├── Skills.jsx       # Skills grouped by category
│   │   ├── Experience.jsx   # Work experience timeline
│   │   ├── Education.jsx    # Education timeline
│   │   ├── Projects.jsx     # Projects grid with filter tabs
│   │   ├── Services.jsx     # Freelance services grid
│   │   └── Contact.jsx      # Contact form + socials
│   └── ui/                  # Reusable small components
│       ├── AnimatedCursor.jsx     # Custom glowing cursor
│       ├── ParticleBackground.jsx # tsparticles constellation
│       ├── SectionHeading.jsx     # Reusable section title component
│       ├── ProjectCard.jsx        # Single project card
│       ├── SkillBadge.jsx         # Single skill badge
│       ├── TimelineItem.jsx       # Single timeline entry
│       └── ServiceCard.jsx        # Single service card
├── data/                    # All content — never hardcode in components
│   ├── projects.js          # All 16 projects data
│   ├── skills.js            # 9 skill categories + tools
│   ├── experience.js        # Work experience entries
│   ├── education.js         # Education entries
│   └── services.js          # 8 freelance services
├── hooks/                   # Custom React hooks
│   └── useScrollAnimation.js # Reusable scroll animation hook
├── App.jsx                  # Root component, renders all sections
├── main.jsx                 # React entry point, Lenis init
└── index.css                # Global styles, font imports, CSS variables
```

## Key Rules
- **Never hardcode content in components** — always import from src/data/
- **Never commit .env** — add to .gitignore
- **Profile photo** must be at src/assets/images/profile.jpg
- **Resume** must be at public/resume.pdf
- **One component per file** — keep files small and focused
- **Heavy components** (Three.js, tsparticles) must be lazy loaded
- **All new reusable components** go in src/components/ui/
- **All new sections** go in src/components/sections/
