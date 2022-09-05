import { H2 } from '@/components/typography/Headings';
import { motion } from 'framer-motion';
import { aboutVariants, headingVariants } from './animations';
import CallToAction from './CallToAction';
import { Description, StyledHeroInfo } from './styles';
import { HeroInfoProps } from './types';

const HeroInfo = (props: HeroInfoProps) => (
  <StyledHeroInfo>
    <H2
      as={motion.h2}
      initial="hidden"
      animate="visible"
      variants={headingVariants}
    >
      {props.heading}
    </H2>
    <Description initial="hidden" animate="visible" variants={aboutVariants}>
      {props.description}
    </Description>
    <CallToAction href={props.href} label="Get in Touch!" />
  </StyledHeroInfo>
);

export default HeroInfo;
