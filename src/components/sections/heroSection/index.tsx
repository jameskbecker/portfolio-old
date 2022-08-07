import Button from '@/components/button';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledHeroSection = styled.section`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-auto-rows: max-content 1fr auto;
  grid-auto-flow: column;
  align-content: center;
  grid-gap: 2rem;
  height: calc(90vh - 20rem);

  background: ${({ theme }: any) => theme.heroSection};
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

  img {
    width: 100%;
  }
`;

const HeroImageContainer = styled(motion.div)`
  position: relative;
  grid-row: span 3;
`;

const HeroSection = () => (
  <StyledHeroSection>
    <motion.h1
      initial={{ opacity: 0, transform: 'translate(-100%, 0)' }}
      animate={{ opacity: 1, transform: 'translate(0%, 0)' }}
      transition={{ duration: 0.5, delay: 0 }}
    >
      Hello!
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, transform: 'translate(-100%, 0)' }}
      animate={{ opacity: 1, transform: 'translate(0%, 0)' }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      My name is James, I&apos;m a full-stack engineer specialising in frontend
      development and graduate of KU London. I have been programming for over 4
      years, intending to use my skills to enhance other people&apos;s lives.
    </motion.p>
    <motion.a
      href="#contact"
      initial={{ opacity: 0, transform: 'translate(-100%, 0)' }}
      animate={{ opacity: 1, transform: 'translate(0%, 0)' }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Button label="Get in Touch!" />
    </motion.a>
    <HeroImageContainer
      initial={{ opacity: 0, transform: 'translate(0,100%)' }}
      animate={{ opacity: 1, transform: 'translate(0,0%)' }}
      transition={{ duration: 0.8 }}
    >
      <Image src="/cover.jpg" layout="fill" objectFit="cover" />
    </HeroImageContainer>
  </StyledHeroSection>
);

export default HeroSection;
