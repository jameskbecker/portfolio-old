import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { ctaVariants, pulseVariants } from './animations';

const CallToAction = (props: any) => (
  <motion.a
    initial="hidden"
    animate="visible"
    variants={ctaVariants}
    href={props.href}
    draggable="false"
    className="box-border flex appearance-none rounded-lg border border-emerald-500 bg-emerald-500 py-2 px-4 opacity-90 duration-300 ease-in-out hover:opacity-100 focus:outline-amber-300 dark:border-emerald-400 dark:bg-emerald-400 dark:focus:outline-amber-400"
  >
    <span className="flex-1 text-center text-base font-medium text-white">{props.label}</span>
  </motion.a>
);

export default CallToAction;
