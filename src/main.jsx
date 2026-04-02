import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'

gsap.registerPlugin(ScrollTrigger)

// Initialize Lenis smooth scroll
const lenis = new Lenis()

// ✅ Proper Lenis + GSAP ScrollTrigger integration:
// Lenis scroll events update ScrollTrigger's scroll position
lenis.on('scroll', ScrollTrigger.update)

// GSAP ticker drives Lenis so both stay in sync
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

// Prevent GSAP from adding delays when tab is inactive then re-focused
gsap.ticker.lagSmoothing(0)

createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
)
