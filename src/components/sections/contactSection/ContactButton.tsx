import { useAnimationControls, useInView } from 'framer-motion';
import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import { flashVariants } from './animations';
import { ContactIcon } from './styles';

const ContactButton = (props: any) => {
  const controls = useAnimationControls();
  const ref = useRef(null);
  const inView = useInView(ref);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (!inView) {
      controls.start('initial');
      return;
    }
    controls.start('flash');
  });

  return (
    <a href={props.href} target="-1">
      <ContactIcon
        ref={ref}
        icon={props.icon}
        initial="initial"
        animate={controls}
        whileHover="hover"
        variants={flashVariants(theme, props.delay)}
      />
    </a>
  );
};

export default ContactButton;
