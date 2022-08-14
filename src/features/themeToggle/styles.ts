import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledThemeToggle = styled(motion.div)`
  color: ${({ theme }) => theme.text};

  opacity: 0.8;
  cursor: pointer;

  :hover {
    opacity: 1;
    transition: 250ms ease-in-out;

    svg,
    svg path {
      color: ${({ theme }: any) => theme.brand};
    }
  }
`;
