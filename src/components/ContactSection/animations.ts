import { Variants } from 'framer-motion';

export const flashVariants = (delay: number): Variants => ({
  initial: { opacity: 0.8, fill: 'black' },
  flash: {
    scale: [1.1, 1],
    fill: ['blue', 'black'],
    opacity: [1, 0.8],
    transition: { type: 'tween', duration: 1, delay },
  },
  hover: {
    opacity: 1,
    fill: 'blue',
    transition: { duration: 0.15, ease: 'easeInOut' },
  },
});
