import { motion, useAnimationControls, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { headingVariants, subheadingVariants } from './animations';
import { StyledPortfolioCover } from './styles';

const PortfolioCover = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) {
      controls.start('fall');
    } else {
      controls.start('stand');
    }
  });

  return (
    <StyledPortfolioCover>
      <motion.h1
        ref={ref}
        initial="stand"
        animate={controls}
        exit="stand"
        variants={headingVariants}
      >
        My Portfolio
      </motion.h1>
      <motion.h3
        ref={ref}
        initial="stand"
        animate={controls}
        exit="stand"
        variants={subheadingVariants}
      >
        I&apos;ve completed many projects throughout my journey so far. Here are
        the ones I am the proudest of!
      </motion.h3>
    </StyledPortfolioCover>
  );
};

export default PortfolioCover;
