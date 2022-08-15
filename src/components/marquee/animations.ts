import { Variants } from 'framer-motion';

export const scrollVariants: Variants = {
  start: { transform: 'translate(0, 0)' },
  end: {
    transform: 'translate(-50%, 0)',
    transition: {
      duration: 60,
      repeat: Infinity,
      type: 'linear',
      ease: 'linear',
    },
  },
};

export const scrollReverseVariants: Variants = {
  start: { transform: 'translate(0, 0)' },
  end: {
    transform: 'translate(50%, 0)',
    transition: {
      duration: 60,
      repeat: Infinity,
      type: 'linear',
      ease: 'linear',
    },
  },
};
