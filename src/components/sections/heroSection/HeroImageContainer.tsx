import screens from '@/screens';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroImageContainer = styled(motion.div)`
  position: relative;
  grid-row: span 3;

  border-radius: 0.75rem;
  overflow: hidden;

  @media only screen and (max-width: ${screens.mobileMax}) {
    display: none;
  }
`;

export default HeroImageContainer;
