import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VanillaTilt from 'vanilla-tilt';
// react-countup is exported a bit weirdly in some environments
import CountUpImport from 'react-countup';
const CountUp = CountUpImport.default || CountUpImport;
import SectionHeading from '../ui/SectionHeading';
import profileImg from '../../assets/images/profile.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        perspective: 1000,
        scale: 1.05,
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    tl.fromTo(
      textRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power3.out" }
    );

    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative bg-[#080d1a] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">

          <div className="flex justify-center relative group">
            {/* Background Glow behind the card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-cyan/20 to-purple-accent/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div
              ref={tiltRef}
              className="relative w-full max-w-[350px] aspect-square rounded-2xl border-2 border-white/10 shadow-[0_0_30px_rgba(124,58,237,0.2)] bg-[#0a0f1e]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Back Glow Plate (Deep Layer) */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-cyan/10 to-purple-accent/10 rounded-2xl blur-xl"
                style={{ transform: 'translateZ(-50px)' }}
              ></div>

              {/* Main Image (Middle Layer) */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <img
                  src={profileImg}
                  alt="Albin Raju"
                  className="w-full h-full object-cover transition-transform duration-500 scale-110 group-hover:scale-100 brightness-110 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 to-transparent"></div>
              </div>

              {/* Floating Accents (Front Layer) */}
              <div
                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-cyan z-20 m-4 pointer-events-none"
                style={{ transform: 'translateZ(60px)' }}
              ></div>
              <div
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-accent z-20 m-4 pointer-events-none"
                style={{ transform: 'translateZ(60px)' }}
              ></div>

              {/* Glassmorphic Badge (Front Layer) */}
              <div
                className="absolute -top-4 -right-12 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl z-30"
                style={{ transform: 'translateZ(80px)' }}
              >
                <span className="text-blue-cyan font-mono text-[10px] uppercase tracking-widest font-bold">DEVOPS ENGINEER</span>
              </div>
            </div>
          </div>

          <div ref={textRef} className="flex flex-col gap-6">
            <h3 className="text-3xl font-syne font-bold text-white">
              Engineering <span className="text-blue-cyan">Reliability</span> & <span className="text-purple-accent">Scale</span>.
            </h3>

            <p className="text-gray-400 font-mono text-base leading-relaxed text-justify">
              I'm Albin Raju, a DevOps Engineer who genuinely loves automating things. With an MCA background and hands-on experience in cloud infrastructure, CI/CD, and monitoring, I help teams build systems that just work.
            </p>

            <p className="text-gray-400 font-mono text-base leading-relaxed text-justify">
              I presented my research at NCACA 2024 and I'm open to remote freelance work, whether it's setting up infra from scratch or cleaning up what's already broken.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-syne font-bold text-blue-cyan">
                  <CountUp end={15} duration={3} enableScrollSpy scrollSpyOnce />+
                </span>
                <span className="font-mono text-xs tracking-wider text-gray-400 uppercase">Tools & Technologies</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-syne font-bold text-white">
                  <CountUp end={10} duration={3} enableScrollSpy scrollSpyOnce />+
                </span>
                <span className="font-mono text-xs tracking-wider text-gray-400 uppercase">GitHub Repositories</span>
              </div>
              <div className="flex flex-col gap-2 sm:col-span-1 col-span-2">
                <span className="text-4xl font-syne font-bold text-purple-accent">
                  <CountUp end={1} duration={3} enableScrollSpy scrollSpyOnce />
                </span>
                <span className="font-mono text-xs tracking-wider text-gray-400 uppercase">Research Paper at NCACA 2024</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
