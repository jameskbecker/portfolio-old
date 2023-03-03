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
    className="flex flex-col"
  >
    <Button label={props.label} initial="grow" animate="shrink" variants={pulseVariants} />
  </motion.a>
);

export default CallToAction;
