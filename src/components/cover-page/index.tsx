import { motion, useAnimationControls, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { headingVariants, subheadingVariants } from './animations';
import { StyledCoverPage } from './styles';

const CoverPage = ({ heading, subheading }: any) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) {
      controls.start('slideIn');
    } else {
      controls.start('initial');
    }
  }, [inView, controls]);

  return (
    <StyledCoverPage>
      <motion.h1
        ref={ref}
        initial="initial"
        animate={controls}
        variants={headingVariants}
      >
        {heading}
      </motion.h1>
      <motion.h3
        ref={ref}
        initial="initial"
        animate={controls}
        variants={subheadingVariants}
      >
        {subheading}
      </motion.h3>
    </StyledCoverPage>
  );
};

export default CoverPage;
