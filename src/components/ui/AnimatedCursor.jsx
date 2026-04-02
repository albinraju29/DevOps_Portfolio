import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

const CustomCursor = () => {
  if (!window.matchMedia('(pointer: fine)').matches) return null;
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={1.5}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: 'var(--accent-cyan)'
      }}
      outerStyle={{
        border: '2px solid var(--accent-purple)'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  );
};

export default CustomCursor;
