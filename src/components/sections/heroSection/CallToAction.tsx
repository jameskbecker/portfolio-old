import Button from '@/components/button';
import { motion, Variants } from 'framer-motion';
import { ctaVariants, pulseVariants } from './animations';

const CallToAction = (props: any) => (
  <motion.a
    initial="hidden"
    animate="visible"
    variants={ctaVariants}
    href={props.href}
    draggable="false"
  >
    <Button
      label={props.label}
      as={motion.button}
      initial="grow"
      animate="shrink"
      variants={pulseVariants}
    />
  </motion.a>
);

export default CallToAction;
