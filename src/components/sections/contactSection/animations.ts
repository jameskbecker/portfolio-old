import { Variants } from 'framer-motion';

export const flashVariants = (theme: any, delay: number): Variants => ({
  initial: { color: theme.text },
  flash: {
    transform: ['scale(1.1)', 'scale(1)'],
    color: [theme.brand, theme.text],
    opacity: [1, 0.8],
    transition: { type: 'tween', duration: 1, delay },
  },
  hover: {
    opacity: 1,
    color: theme.brand,
    transition: { duration: 0.15, ease: 'easeInOut' },
  },
});
