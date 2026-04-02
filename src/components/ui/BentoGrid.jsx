import React, { useRef } from 'react';

const BentoCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`bento-card relative rounded-2xl border border-white/10 bg-[#0b101e] overflow-hidden p-8 transition-colors duration-300 hover:border-blue-cyan/30 ${className}`}
    >
      {/* spotlight */}
      <div className="bento-spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </div>
  );
};

export default BentoCard;
