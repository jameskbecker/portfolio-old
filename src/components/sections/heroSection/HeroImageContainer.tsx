import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroImageContainer = styled(motion.div)`
  position: relative;
  grid-row: span 3;

  border-radius: 0.25rem;
  overflow: hidden;
`;

export default HeroImageContainer;
