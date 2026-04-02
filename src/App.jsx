import React, { Suspense, lazy } from 'react';
import CustomCursor from './components/ui/AnimatedCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';

const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Education = lazy(() => import('./components/sections/Education'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Services = lazy(() => import('./components/sections/Services'));
const Contact = lazy(() => import('./components/sections/Contact'));

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="min-h-screen z-10 relative bg-dark">
        <Hero />
        <Suspense fallback={null}><About /></Suspense>
        <Suspense fallback={null}><Skills /></Suspense>
        <Suspense fallback={null}><Experience /></Suspense>
        <Suspense fallback={null}><Education /></Suspense>
        <Suspense fallback={null}><Projects /></Suspense>
        <Suspense fallback={null}><Services /></Suspense>
        <Suspense fallback={null}><Contact /></Suspense>

        {/* Placeholder for others */}
      </main>

      <Footer />
    </>
  );
}

export default App;
