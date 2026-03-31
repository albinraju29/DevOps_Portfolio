import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../ui/SectionHeading';
import TimelineItem from '../ui/TimelineItem';
import { experience } from '../../data/experience';
import { education } from '../../data/education';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const lineRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (lineRef.current) {
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        { 
          scaleY: 1, 
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom bottom",
            scrub: true
          }
        }
      );
    }
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative bg-[#080d1a] border-b border-white/5 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-cyan/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading title="My Journey" subtitle="Experience & Education" />

        <div className="relative mt-20 max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 z-0"></div>
          
          {/* Animated GSAP Line */}
          <div 
            ref={lineRef}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-cyan via-purple-accent to-transparent origin-top -translate-x-1/2 pointer-events-none z-10"
          ></div>

          <div className="mb-20 relative z-20">
            <h3 className="text-2xl font-syne font-bold text-white mb-12 flex items-center gap-4 pl-[50px] md:pl-0 md:justify-center">
              <span className="text-blue-cyan">💼</span> Experience
            </h3>
            {experience.map((item, idx) => (
              <TimelineItem key={item.id} data={item} index={idx} isLeft={idx % 2 === 0} />
            ))}
          </div>

          <div className="relative z-20">
            <h3 className="text-2xl font-syne font-bold text-white mb-12 flex items-center gap-4 pl-[50px] md:pl-0 md:justify-center">
              <span className="text-purple-accent">🎓</span> Education
            </h3>
            {education.map((item, idx) => (
              <TimelineItem key={item.id} data={item} index={idx} isLeft={idx % 2 === 0} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
