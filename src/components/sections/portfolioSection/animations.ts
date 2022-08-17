import { Variants } from 'framer-motion';

export const headingVariants: Variants = {
  stand: {
    opacity: 0,
    transform: 'rotate(-90deg)',
    transformOrigin: 'center left',
  },
  fall: {
    opacity: 1,
    transform: 'rotate(0deg)',
    transformOrigin: 'center left',
    transition: { type: 'spring', stiffness: 50, duration: 1, delay: 0.25 },
  },
};

export const subheadingVariants: Variants = {
  stand: {
    opacity: 0,
    transform: 'rotate(-90deg)',
    transformOrigin: 'center left',
  },
  fall: {
    opacity: 1,
    transform: 'rotate(0deg)',
    transformOrigin: 'center left',
    transition: { type: 'spring', stiffness: 50, duration: 1 },
  },
};
