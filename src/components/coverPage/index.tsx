import { motion, useAnimationControls, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { H1, H3 } from '../typography/Headings';
import { headingVariants, subheadingVariants } from './animations';
import {
  HeadingContainer,
  StyledCoverPage,
  SubheadingContainer,
} from './styles';

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
      <HeadingContainer>
        <H1
          as={motion.h1}
          ref={ref}
          initial="initial"
          animate={controls}
          variants={headingVariants}
        >
          {heading}
        </H1>
      </HeadingContainer>
      <SubheadingContainer>
        <H3
          as={motion.h3}
          ref={ref}
          initial="initial"
          animate={controls}
          variants={subheadingVariants}
        >
          {subheading}
        </H3>
      </SubheadingContainer>
    </StyledCoverPage>
  );
};

export default CoverPage;
