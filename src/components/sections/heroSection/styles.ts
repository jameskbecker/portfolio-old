import screens from '@/screens';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledHeroSection = styled.section`
  position: relative;
  height: 100vh;

  background: transparent;
`;

export const StyledHeroBanner = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  opacity: 0.4;
`;

export const StyledOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  z-index: -2;

  background: linear-gradient(365deg, #ffffff00 60%, #ffffff 100%);
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  height: 100%;

  padding: 12vw;
  box-sizing: border-box;

  @media only screen and (max-width: ${screens.tabletMax}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const HeroImageContainer = styled(motion.div)`
  position: relative;
  flex: 1 1;
  height: 100%;

  border-radius: 0.75rem;
  overflow: hidden;

  @media only screen and (max-width: ${screens.tabletMax}) {
    display: none;
  }
`;

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

export const Body = styled(motion.p)`
  font-size: clamp(1.25rem, 2vw + 1rem, 1.5rem);
  font-weight: 300;
  color: ${({ theme }: any) => theme.text};
  text-align: left;
`;
