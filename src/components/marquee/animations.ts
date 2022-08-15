import { Variants } from 'framer-motion';

export const scrollVariants: Variants = {
  start: { transform: 'translate(50%, 0)' },
  end: {
    transform: 'translate(-50%, 0)',
    transition: { duration: 30, repeat: Infinity },
  },
};

export const scrollReverseVariants: Variants = {
  start: { transform: 'translate(-50%, 0)' },
  end: {
    transform: 'translate(50%, 0)',
    transition: { duration: 30, repeat: Infinity },
  },
};
