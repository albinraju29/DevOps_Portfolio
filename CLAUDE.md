# CLAUDE.md — Portfolio Project Instructions

## Who I Am
My name is Albin Raju. I am a DevOps Engineer & Cloud Infrastructure Specialist
based in Thrissur, Kerala, India. This is my personal portfolio website
hosted at albinraju.in

## Project Goal
Build a stunning, animation-heavy personal portfolio website that:
- Establishes my personal brand as a DevOps Engineer
- Attracts freelance clients
- Makes visitors wonder "how did he build this?"
- Feels like an awwwards.com / FWA level portfolio
- Every section must feel intentional, cinematic, and premium

---

## Tech Stack
- React + Vite
- Tailwind CSS
- Framer Motion
- Three.js + @react-three/fiber + @react-three/drei
- GSAP + ScrollTrigger + SplitText
- Lenis (smooth scroll)
- tsparticles
- vanilla-tilt
- react-type-animation
- react-countup
- react-animated-cursor
- EmailJS
- react-icons

---

## Design Rules
- Theme: Dark only — never use light backgrounds
- Background: #0a0f1e
- Primary accent: #00D9FF (cyan)
- Secondary accent: #7C3AED (purple)
- Text: #e2e8f0
- Muted text: #64748b
- Display font: Syne (headings, names, bold statements)
- Body/Mono font: JetBrains Mono (code, labels, tags)
- Never use generic fonts like Inter, Roboto, Arial
- All section headings must use gradient text (cyan → purple)
- All cards must have glassmorphism effect (backdrop-blur + border opacity)
- All hover states must have a neon glow (cyan or purple box-shadow)
- Add subtle noise texture overlay on all section backgrounds
- Use generous whitespace — never feel cramped

---

## Animation Philosophy
Every element must animate with purpose. Nothing should be static.
Think cinematic — like a movie trailer, not a PowerPoint.

### Scroll Animations (GSAP ScrollTrigger)
- All section headings: fade up + slight scale from 0.95 to 1
- All cards/grids: staggered fade-up with 0.1s delay between items
- Timeline items: slide in from alternating left/right
- Skill badges: staggered pop-in with spring easing
- Stats counters: trigger react-countup on scroll enter
- Horizontal scroll where content benefits from it (e.g. skills ticker)

### Mount Animations (Framer Motion)
- Every section component: fade in + translateY(20px) on enter
- Navbar: slide down from top on page load
- Hero text: staggered word/letter reveal
- Modals, drawers, tooltips: scale + fade

### Micro-interactions
- All buttons: magnetic effect on hover (cursor pulls button slightly)
- All project/service cards: vanilla-tilt 3D tilt on hover
- All social icons: scale + color transition on hover
- Navbar links: underline slide-in animation on hover
- CTA buttons: pulsing glow animation (keyframe)
- Skill badges: subtle float animation on hover

### Page-level Effects
- Custom animated cursor (already exists in AnimatedCursor.jsx)
- Lenis smooth scroll — applied globally in main.jsx
- Particle background in Hero only (performance)
- Scroll progress indicator bar at top of page
- Section transitions: subtle fade between sections

---

## Code Rules
- Always use Tailwind for styling — no inline styles except for dynamic JS values
- Use Framer Motion for component mount/unmount transitions
- Use GSAP only for scroll-driven and complex timeline animations
- All content must come from src/data/ files — never hardcode content in components
- Every section must be fully mobile responsive
- Use Tailwind breakpoints: sm, md, lg, xl
- Always lazy load heavy components (Three.js, tsparticles) with Suspense
- Keep components small and focused — one job per component
- Use .env for all sensitive keys — never hardcode them
- Always add loading/fallback states for async components
- Use useRef + GSAP context for cleanup to avoid memory leaks
- Always guard refs: if (!ref.current) return; before GSAP animations
- Use Framer Motion parallax effects (useScroll, useTransform) on Hero, Services, and About sections

---

## Section-by-Section Requirements

### Hero
- Full viewport height
- Animated wireframe 3D sphere (Three.js) — right side
- GSAP letter-by-letter name reveal on load
- TypeAnimation for role cycling
- Magnetic CTA buttons
- Particle background (tsparticles)
- Scroll indicator with bouncing animation
- Globe fades/scales out on scroll (ScrollTrigger)

### About
- Split layout: photo left, bio right (reverse on mobile)
- Profile photo with glowing cyan border + tilt effect
- Animated stat counters (react-countup) triggered on scroll
- Bio text reveals line by line on scroll
- Currently working at badge with pulsing green dot

### Skills
- Grouped by category (Cloud, Containers, CI/CD, Monitoring, etc.)
- Each skill badge: icon + name + hover glow
- Infinite horizontal marquee ticker for all skills combined
- Staggered grid reveal on scroll
- Category headers with gradient underline

### Experience
- Vertical timeline with animated line drawing on scroll
- Cards slide in from alternating sides
- Company logo/icon placeholder
- Tech stack tags per role
- Hover: card lifts with glow

### Education
- Clean timeline — similar to experience
- Institution name prominent
- Grade/achievement highlighted

### Projects
- 3 filter tabs: DevOps | College | Games
- Tab switch: smooth fade transition
- Each card: glassmorphism + vanilla-tilt
- Hover: glow border + slight scale
- Tech stack tags at bottom of card
- GitHub link icon — opens in new tab
- Staggered grid animation on tab switch

### Services
- 8 freelance DevOps services
- Icon + title + description per card
- Glassmorphism cards with tilt
- Hover: cyan border glow
- CTA at bottom linking to Contact

### Contact
- Split layout: left info, right form
- EmailJS form with loading + success + error states
- Social links row with hover animations
- Location badge (Kerala, India)
- Form fields: glassmorphism style with focus glow

---

## Folder Structure
- src/components/layout/ — Navbar, Footer
- src/components/sections/ — one file per section
- src/components/ui/ — reusable small components
- src/data/ — all content data files
- src/assets/images/ — all images including profile.jpg
- public/ — favicon, og-image.png, resume.pdf

---

## Environment Variables
All in .env file:
VITE_EMAILJS_SERVICE_ID=service_d05lpoa
VITE_EMAILJS_TEMPLATE_ID=template_oqvppvl
VITE_EMAILJS_PUBLIC_KEY=c1EjGT0RXt-NYEhUl

---

## Important Notes
- Profile photo is at src/assets/images/profile.jpg
- Domain is albinraju.in
- Deployed on Vercel via Git push
- Blog is deferred — only a navbar link to blog.albinraju.in
- Twitter/X handle is placeholder — to be filled later
- Always check PROGRESS.md before starting any session
- Always update PROGRESS.md after completing any task
- When rebuilding any section, preserve all existing data imports from src/data/
- Never remove existing working animations — only enhance them
- Test on mobile after every section build