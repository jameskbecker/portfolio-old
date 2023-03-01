import Button from '@/components/Button/Button';
import { motion } from 'framer-motion';
import { ctaVariants, pulseVariants } from './animations';
import { StyledCallToAction } from './styles';

const CallToAction = (props: any) => (
  <StyledCallToAction
    initial="hidden"
    animate="visible"
    variants={ctaVariants}
    href={props.href}
    draggable="false"
  >
    <Button label={props.label} initial="grow" animate="shrink" variants={pulseVariants} />
  </StyledCallToAction>
);

export default CallToAction;
