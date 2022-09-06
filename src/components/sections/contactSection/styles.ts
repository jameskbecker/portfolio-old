import screens from '@/screens';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;

  padding: 12vw 0;
  background: ${({ theme }: any) => theme.brand};

  box-sizing: border-box;

  overflow: hidden;

  h1,
  h3 {
    color: ${({ theme }: any) => theme.brandText};
  }

  h3 {
    opacity: 0.7;
  }
`;

export const StyledContactContent = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-evenly;
  gap: 3vw;

  font-size: clamp(3rem, 3vw + 1rem, 4rem);;
  mid-width: 50vw
  box-sizing: border-box;

  @media only screen and (max-width: ${screens.tabletMax}) {
    flex-direction: column;
    gap: 4vh;
  }
`;

export const StyledContactButton = styled(motion.a)`
  height: 1em;
  width: 1em;
  font-size: inherit;
  opacity: 0.7;

  div {
    color: ${({ theme }) => theme.brandText};
    text-align: center;
    opacity: inherit;
  }

  svg {
    height: 1em;
    width: 1em;
    fill: white;
    font-size: inherit;
    opacity: inherit;
  }
`;
