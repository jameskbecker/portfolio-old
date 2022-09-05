import { Variants } from 'framer-motion';

export const headingVariants: Variants = {
  initial: {
    opacity: 0,
    transform: 'translateX(-100%)',
  },
  slideIn: {
    opacity: 1,
    transform: 'translateX(0%)',
    transition: { duration: 1 },
  },
};

export const subheadingVariants: Variants = {
  initial: {
    opacity: 0,
    transform: 'translateX(-100%)',
  },
  slideIn: {
    opacity: 1,
    transform: 'translateX(0%)',
    transition: { duration: 1, delay: 0.5 },
  },
};
