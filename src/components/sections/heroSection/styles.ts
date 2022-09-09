import { tabletMax } from '@/screens';
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

  & > * {
    z-index: -2;
  }
`;

export const StyledOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: linear-gradient(365deg, #ffffff00 60%, #ffffff 100%);

  z-index: -2;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  height: 100%;

  padding: 12vw;
  box-sizing: border-box;

  @media only screen and (${tabletMax}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledHeroImage = styled(motion.div)`
  position: relative;
  flex: 1 1;
  height: 100%;

  border-radius: 0.75rem;
  overflow: hidden;

  @media only screen and (${tabletMax}) {
    display: none;
  }
`;

export const StyledHeroInfo = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  & > * {
    width: 100%;
  }
`;

export const Description = styled(motion.p)`
  font-size: clamp(1.25rem, 2vw + 1rem, 1.5rem);
  font-weight: 300;
  color: ${({ theme }: any) => theme.text};
`;

export const StyledCallToAction = styled(motion.a)`
  display: flex;
  flex-direction: column;
`;
