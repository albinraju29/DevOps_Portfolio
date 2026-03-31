# STACK.md — Tech Stack

## Core Framework
- **React 18** — UI framework
- **Vite** — build tool and dev server (fast HMR)
- **Tailwind CSS v3** — utility-first styling

## Animation & 3D
- **Framer Motion** — section animations, page transitions, scroll-triggered reveals
- **GSAP + @gsap/react** — complex scroll-driven animations, letter reveals, timeline drawing
- **GSAP ScrollTrigger** — scroll-linked animation control
- **GSAP SplitText** — letter/word split animations for section headings
- **Three.js** — 3D rendering engine
- **@react-three/fiber** — React wrapper for Three.js
- **@react-three/drei** — Three.js helpers (lighting, camera, stars)
- **Lenis** — smooth inertia scrolling
- **vanilla-tilt / react-vanilla-tilt** — 3D card tilt on hover

## UI & Effects
- **tsparticles / @tsparticles/react / @tsparticles/slim** — particle constellation background on hero
- **react-animated-cursor** — custom glowing cursor
- **react-type-animation** — typing animation on hero
- **react-countup** — animated stats count-up in About

## Icons
- **react-icons** — DevOps tool icons, social icons
- **lucide-react** — UI icons (arrows, buttons, etc.)

## Contact Form
- **emailjs-com** — contact form without backend
  - Service ID: from .env
  - Template ID: from .env
  - Public Key: from .env

## SEO
- **react-helmet-async** — meta tags, OG image, title
  (to be configured after deployment)

## Fonts (Google Fonts)
- **Syne** — display font for headings and name
- **JetBrains Mono** — body and monospace text

## Hosting & Domain
- **Vercel** — hosting and auto deployment
- **Cloudflare** — DNS management after GoDaddy transfer
- **GitHub** — source control, triggers Vercel deploy on push

## Blog (Deferred)
- **Hashnode** — blog platform at blog.albinraju.in

## Environment Variables
All sensitive keys stored in .env:
- VITE_EMAILJS_SERVICE_ID
- VITE_EMAILJS_TEMPLATE_ID
- VITE_EMAILJS_PUBLIC_KEY

## Breakpoints (Tailwind)
- Mobile: default (< 768px)
- Tablet: md (768px - 1024px)
- Desktop: lg (> 1024px)
- Wide: xl (> 1280px)

## Advanced UI Techniques
- **Glassmorphism** — backdrop-blur + border opacity on all cards
- **CSS noise texture overlay** — subtle grain on section backgrounds
- **Magnetic buttons** — cursor-pull effect on CTA buttons
- **Infinite marquee ticker** — horizontal scrolling skill strip
- **Neon glow hover** — cyan/purple box-shadow on all interactive elements
- **Scroll progress indicator** — thin animated bar at top of viewport
- **Split text reveals** — GSAP letter-by-letter on section headings
- **Staggered grid reveals** — 0.1s delay between cards/badges on scroll enter
- **Parallax depth** — background elements move at different scroll speeds
- **Counter animations** — react-countup triggered on scroll enter in About
- **Timeline line draw** — GSAP SVG path animation in Experience/Education
- **Tab switch transitions** — smooth fade + slide between project filter tabs

## Color Tokens
- Background: #0a0f1e
- Primary accent: #00D9FF (cyan)
- Secondary accent: #7C3AED (purple)
- Text: #e2e8f0
- Muted text: #64748b
- Card background: rgba(255,255,255,0.03)
- Card border: rgba(255,255,255,0.08)
- Glow cyan: 0 0 20px rgba(0,217,255,0.3)
- Glow purple: 0 0 20px rgba(124,58,237,0.3)

## NPM Install Command
```bash
npm install framer-motion gsap @gsap/react three @react-three/fiber @react-three/drei lenis react-vanilla-tilt @tsparticles/react @tsparticles/slim react-animated-cursor react-type-animation react-countup react-helmet-async emailjs-com react-icons lucide-react
```