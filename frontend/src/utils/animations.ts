// src/utils/animations.ts
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  
  export const slideIn = (direction: 'left' | 'right') => ({
    hidden: { x: direction === 'left' ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  });