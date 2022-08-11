import screens from '@/screens';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroImageContainer = styled(motion.div)`
  position: relative;
  flex: 1 1;
  height: 100%;

  border-radius: 0.75rem;
  overflow: hidden;

  @media only screen and (max-width: ${screens.tabletMax}) {
    display: none;
  }
`;

export default HeroImageContainer;
