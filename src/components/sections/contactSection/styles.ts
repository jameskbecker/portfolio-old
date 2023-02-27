import { mobileMax, tabletMax } from '@/screens';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;

  background: ${({ theme }: any) => theme.brand};

  padding: 0 clamp(32px, 12vw, 192px);
  box-sizing: border-box;

  overflow: hidden;

  h1,
  h3 {
    color: ${({ theme }: any) => theme.brandText};
    text-align: center;

    @media only screen and (${mobileMax}) {
      text-align: left;
    }
  }

  h3 {
    opacity: 0.7;
  }

  @media only screen and (${tabletMax}) {
    padding: 0 32px;
  }
`;

export const StyledContactContent = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-evenly;
  gap: 3rem;
  width: 100%;

  box-sizing: border-box;

  @media only screen and (${tabletMax}) {
    flex-direction: column;
    gap: 4vh;
  }

  @media only screen and (${mobileMax}) {
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
