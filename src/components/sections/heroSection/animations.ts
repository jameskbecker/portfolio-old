import { Variants } from 'framer-motion';

export const imageVariants: Variants = {
  hidden: { opacity: 0, transform: 'translate(0,100%)' },
  visible: {
    opacity: 1,
    transform: 'translate(0,0%)',
    transition: { duration: 0.8 },
  },
};

export const headingVariants: Variants = {
  hidden: { opacity: 0, transform: 'translate(-100%, 0)' },
  visible: {
    opacity: 1,
    transform: 'translate(0%, 0)',
    transition: { duration: 0.5, delay: 0 },
  },
};

export const aboutVariants: Variants = {
  hidden: { opacity: 0, transform: 'translate(-100%, 0)' },
  visible: {
    opacity: 1,
    transform: 'translate(0%, 0)',
    transition: { duration: 0.5, delay: 0.15 },
  },
};

export const ctaVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: 'translate(-100%, 0)',
  },
  visible: {
    opacity: 1,
    transform: 'translate(0%, 0)',
    transition: { duration: 0.5, delay: 0.3 },
  },
};

export const pulseVariants: Variants = {
  grow: { transform: 'scale(1)' },
  shrink: {
    transform: 'scale(0.99)',
    transition: {
      type: 'spring',
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 1.25,
    },
  },
};
