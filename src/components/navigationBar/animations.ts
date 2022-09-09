import { Variants } from 'framer-motion';

export const mobileMenuVariants: Variants = {
  close: {
    height: 0,
    padding: 0,
  },
  open: {
    height: 'auto',
    padding: '2rem 0',
    transition: {
      duration: 0.25,
    },
  },
};

export const menuButtonVariants = {
  close: {
    rotate: 0,
  },
  open: {
    rotate: 90,
  },
};
