import { Variants } from 'framer-motion';

export const toggleVariants: Variants = {
  light: { transform: 'rotate(0deg)', transition: { duration: 0.25 } },
  dark: { transform: 'rotate(180deg)', transition: { duration: 0.25 } },
  hover: { transform: 'rotate(15deg)', transition: { duration: 0 } },
  hoverDark: { transform: 'rotate(195deg)', transition: { duration: 0 } },
};
