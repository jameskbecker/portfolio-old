import Button from '@/components/button';
import { motion } from 'framer-motion';
import { textAnimation } from './animations';

const CallToAction = (props: any) => (
  <motion.a
    {...textAnimation}
    transition={{ duration: 0.5, delay: 0.3 }}
    href={props.href}
    draggable="false"
  >
    <Button
      label={props.label}
      as={motion.button}
      initial={{ transform: 'scale(1)' }}
      animate={{ transform: 'scale(0.99)' }}
      transition={{
        type: 'spring',
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 1.25,
      }}
    />
  </motion.a>
);

export default CallToAction;
