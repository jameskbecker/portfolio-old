import { motion } from 'framer-motion';
import { ButtonProps } from './types';

const Button = ({ label, ...rest }: ButtonProps) => (
  <motion.button
    className="appearance-none rounded-lg border border-brand bg-brand py-2 px-4 opacity-90 duration-300 ease-in-out hover:opacity-100"
    draggable="false"
    {...rest}
  >
    <span className="text-white text-base font-medium">{label}</span>
  </motion.button>
);

export default Button;
