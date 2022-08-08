import Button from '@/components/button';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeroBanner from './HeroBanner';
import HeroImageContainer from './HeroImageContainer';
import { heroImageAnimation, textAnimation } from './animations';

const StyledHeroSection = styled.section`
  position: relative;
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-auto-rows: max-content 1fr auto;
  grid-auto-flow: column;
  align-content: center;
  grid-gap: 2rem;
  height: calc(90vh - 20rem);

  background: transparent;
  padding: 10rem 12rem;

  a {
    display: flex;
    flex-direction: column;
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
    color: ${({ theme }: any) => theme.text};
  }
`;

const description =
  "My name is James, I'm a full-stack engineer specialising in frontend development and graduate of KU London. I have been programming for over 4 years, intending to use my skills to enhance other people's lives.";

const HeroSection = () => (
  <StyledHeroSection>
    <HeroBanner />
    <motion.h1 {...textAnimation} transition={{ duration: 0.5, delay: 0 }}>
      Hello!
    </motion.h1>
    <motion.p {...textAnimation} transition={{ duration: 0.5, delay: 0.15 }}>
      {description}
    </motion.p>
    <motion.a
      {...textAnimation}
      transition={{ duration: 0.5, delay: 0.3 }}
      href="#contact"
    >
      <Button label="Get in Touch!" />
    </motion.a>
    <HeroImageContainer {...heroImageAnimation} transition={{ duration: 0.8 }}>
      <Image src="/cover.jpg" layout="fill" objectFit="cover" />
    </HeroImageContainer>
  </StyledHeroSection>
);

export default HeroSection;
