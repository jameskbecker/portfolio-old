import { mobileMax, tabletMax } from '@/screens';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledHeroSection = styled.section`
  position: relative;
  height: 100vh;
  align-self: center;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 128px;
  box-sizing: border-box;

  background: ${({ theme }: any) => theme.heroSection};

  overflow: hidden;

  @media only screen and (${tabletMax}) {
    padding: 0 32px;
  }

  /* @media only screen and (${mobileMax}) {
    padding: 0 16px;
  } */
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
  flex: 1 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
  height: 100%;
  max-width: 1280px;

  padding: clamp(32px, 24vw, 192px) 0;
  margin: auto 0;
  box-sizing: border-box;
  overflow: hidden;

  @media only screen and (${tabletMax}) {
    padding: 96px 0;
    flex-direction: column-reverse;
    justify-content: flex-end;
    gap: 32px;
  }
`;

export const StyledHeroImage = styled(motion.div)`
  position: relative;
  flex: 0 0 520px;
  height: 100%;
  border: 1px solid #e9e9e9;
  box-sizing: border-box;
  border-radius: 1rem;

  overflow: hidden;

  @media only screen and (${tabletMax}) {
    display: none;
  }

  @media only screen and (${tabletMax}) {
    display: block;
    flex: 1 1;
    width: 100%;
  }
`;

export const StyledHeroInfo = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  overflow: hidden;
  margin: auto 0;

  & > * {
    width: 100%;
  }
`;

export const Description = styled(motion.p)`
  font-size: clamp(1rem, 2vw + 1rem, 1.5rem);
  line-height: 36px;
  font-weight: 300;
  color: ${({ theme }: any) => theme.text};

  overflow: hidden;
  max-height: 100%;

  @media only screen and (${tabletMax}) {
    font-size: 1.25rem;
  }

  @media only screen and (${mobileMax}) {
    font-size: 1rem;
  }
`;

export const StyledCallToAction = styled(motion.a)`
  display: flex;
  flex-direction: column;
`;
