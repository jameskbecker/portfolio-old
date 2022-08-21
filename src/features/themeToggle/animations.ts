import { Variants } from 'framer-motion';

export const toggleVariants: Variants = {
  light: {
    opacity: 0.8,
    transform: 'rotate(0deg)',
    transition: { duration: 0.25 },
  },
  dark: {
    opacity: 0.8,
    transform: 'rotate(180deg)',
    transition: { duration: 0.25 },
  },
  hover: {
    transform: 'rotate(15deg)',
    transition: {
      opacity: 1,
      duration: 0.25,
      ease: 'easeInOut',
    },
  },
  hoverDark: { transform: 'rotate(195deg)', transition: { duration: 0 } },
};
