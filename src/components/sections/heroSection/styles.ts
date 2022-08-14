import screens from '@/screens';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledHeroSection = styled.section`
  position: relative;
  height: 92vh;

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
