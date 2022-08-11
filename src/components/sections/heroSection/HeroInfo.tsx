import Button from '@/components/button';
import screens from '@/screens';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { textAnimation } from './animations';

const StyledHeroInfo = styled.div`
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

type HeroInfoProps = {
  heading: string;
  description: string;
  href: string;
};

const HeroInfo = (props: HeroInfoProps) => (
  <StyledHeroInfo>
    <motion.h2 {...textAnimation} transition={{ duration: 0.5, delay: 0 }}>
      {props.heading}
    </motion.h2>
    <motion.h3 {...textAnimation} transition={{ duration: 0.5, delay: 0.15 }}>
      {props.description}
    </motion.h3>
    <motion.a
      {...textAnimation}
      transition={{ duration: 0.5, delay: 0.3 }}
      href={props.href}
      draggable="false"
    >
      <Button label="Get in Touch!" />
    </motion.a>
  </StyledHeroInfo>
);

export default HeroInfo;
