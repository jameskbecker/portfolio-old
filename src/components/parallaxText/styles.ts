import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledParallaxText = styled.div`
  span {
    display: block;
    margin-right: 30px;
  }
`;

export const Scroller = styled(motion.div)`
  display: flex;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
`;
