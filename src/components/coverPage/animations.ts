import { Variants } from 'framer-motion';

export const headingVariants: Variants = {
  initial: {
    opacity: 0,
    x: '-100%',
  },
  slideIn: {
    opacity: 1,
    x: '0%',
    transition: { duration: 0.5 },
  },
};

export const subheadingVariants: Variants = {
  initial: {
    opacity: 0,
    x: '-100%',
  },
  slideIn: {
    opacity: 1,
    x: '0%',
    transition: { duration: 0.5, delay: 0.25 },
  },
};
