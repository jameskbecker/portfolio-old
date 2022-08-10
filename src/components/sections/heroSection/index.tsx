import Button from '@/components/button';
import screens from '@/screens';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import { heroImageAnimation, textAnimation } from './animations';
import HeroBanner from './HeroBanner';
import HeroImageContainer from './HeroImageContainer';

const StyledHeroSection = styled.section`
  position: relative;
  height: 92vh;

  background: transparent;
`;

const HeroSectionContent = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-auto-rows: max-content 1fr auto;
  grid-auto-flow: column;
  align-content: center;
  grid-gap: 2rem;
  height: 100%;

  padding: 12vw;
  box-sizing: border-box;

  a {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: ${screens.tabletMax}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const description =
  "My name is James, I'm a full-stack engineer specialising in frontend development and graduate of KU London. I have been programming for over 4 years, intending to use my skills to enhance other people's lives.";

const HeroSection = () => (
  <StyledHeroSection>
    <HeroBanner />
    <HeroSectionContent>
      <motion.h2 {...textAnimation} transition={{ duration: 0.5, delay: 0 }}>
        Hello!
      </motion.h2>
      <motion.h3 {...textAnimation} transition={{ duration: 0.5, delay: 0.15 }}>
        {description}
      </motion.h3>
      <motion.a
        {...textAnimation}
        transition={{ duration: 0.5, delay: 0.3 }}
        href="#contact"
        draggable="false"
      >
        <Button label="Get in Touch!" />
      </motion.a>
      <HeroImageContainer
        {...heroImageAnimation}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/cover.jpg"
          layout="fill"
          objectFit="cover"
          draggable="false"
        />
      </HeroImageContainer>
    </HeroSectionContent>
  </StyledHeroSection>
);

export default HeroSection;
