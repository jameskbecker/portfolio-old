import { Variants } from 'framer-motion';

export const toggleVariants: Variants = {
  light: {
    rotate: 0,
    opacity: 0.8,
    transition: { duration: 0.25 },
  },
  dark: {
    rotate: 180,
    opacity: 0.8,
    transition: { duration: 0.25 },
  },
  hover: {
    rotate: 15,
    opacity: 1,
    transition: { duration: 0.25 },
  },
  hoverDark: {
    rotate: 195,
    transition: { duration: 0.25 },
  },
};
