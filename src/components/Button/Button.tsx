import { motion } from 'framer-motion';
import { ButtonProps } from './types';

const Button = ({ label, ...rest }: ButtonProps) => (
  <motion.button
    className="appearance-none rounded-lg border border-emerald-500 bg-emerald-500 py-2 px-4 opacity-90 duration-300 ease-in-out hover:opacity-100 dark:border-emerald-400 dark:bg-emerald-400"
    draggable="false"
    {...rest}
  >
    <span className="text-base font-medium text-white">{label}</span>
  </motion.button>
);

export default Button;
