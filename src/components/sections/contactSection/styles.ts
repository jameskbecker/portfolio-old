import screens from '@/screens';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;

  background: ${({ theme }: any) => theme.brand};
  padding: 6rem 12.5rem;
  box-sizing: border-box;

  overflow: hidden;

  h1,
  h3 {
    color: ${({ theme }: any) => theme.brandText};
    text-align: center;
  }

  h3 {
    opacity: 0.7;
  }

  @media only screen and (max-width: ${screens.tabletMax}) {
    padding: 6rem;
  }

  @media only screen and (max-width: ${screens.mobileMax}) {
    padding: 2rem;
  }
`;

export const StyledContactContent = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-evenly;
  gap: 1rem;
  width: 100%;

  box-sizing: border-box;

  @media only screen and (max-width: ${screens.tabletMax}) {
    flex-direction: column;
    gap: 4vh;
  }

  @media only screen and (max-width: ${screens.mobileMax}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 4rem;
    width: auto;
  }
`;

export const StyledContactButton = styled(motion.a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  font-size: inherit;
  opacity: 0.7;

  overflow: hidden;

  div {
    color: ${({ theme }) => theme.brandText};
    text-align: center;
    opacity: inherit;
  }

  svg {
    height: 3em;
    width: 3em;
    fill: white;
    font-size: inherit;
    opacity: inherit;
  }
`;
