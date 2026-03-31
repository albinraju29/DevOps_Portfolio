import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticleBackground = () => {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    // v3 API: initParticlesEngine must be called once before rendering
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  // Don't render canvas until engine is initialized — prevents white flash
  if (!engineReady) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: { value: 'transparent' },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.5 } },
          },
        },
        particles: {
          color: { value: '#00D9FF' },
          links: {
            color: '#7C3AED',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: false,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 40,
          },
          opacity: { value: 0.3 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default ParticleBackground;
