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

  border-top: 1px solid ${({ theme }: any) => theme.text};
  box-sizing: border-box;

  overflow: hidden;
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

  svg {
    height: 1em;
    width: 1em;
    font-size: inherit;
  }
`;
