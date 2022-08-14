import screens from '@/screens';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledHeroInfo = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  & > * {
    width: 100%;
  }

  a {
    display: flex;
    flex-direction: column;
  }

  h2 {
    text-align: left;
  }

  @media only screen and (max-width: ${screens.tabletMax}) {
    gap: 2rem;
  }
`;

export const Heading = styled(motion.h2)``;

export const Body = styled(motion.h3)``;
