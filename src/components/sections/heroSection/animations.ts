import { Variants } from 'framer-motion';

export const imageVariants: Variants = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

export const headingVariants: Variants = {
  hidden: {
    x: '-100%',
    opacity: 0,
  },
  visible: {
    x: '0%',
    opacity: 1,
    transition: { duration: 0.5, delay: 0 },
  },
};

export const aboutVariants: Variants = {
  hidden: {
    x: '-100%',
    opacity: 0,
  },
  visible: {
    x: '0%',
    opacity: 1,
    transition: { duration: 0.5, delay: 0.15 },
  },
};

export const ctaVariants: Variants = {
  hidden: {
    x: '-100%',
    opacity: 0,
  },
  visible: {
    x: '0%',
    opacity: 1,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

export const pulseVariants: Variants = {
  grow: { scale: 1 },
  shrink: {
    scale: 0.99,
    transition: {
      type: 'spring',
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 1.25,
    },
  },
};
