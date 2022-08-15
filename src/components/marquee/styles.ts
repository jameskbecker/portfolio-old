import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledMarquee = styled(motion.div)`
  overflow: hidden;
  white-space: nowrap;

  & > div {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
`;
