import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';

const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-[#080d1a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading title="What I Do" subtitle="Services" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
