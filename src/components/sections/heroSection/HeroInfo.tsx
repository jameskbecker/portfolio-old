import { aboutVariants, headingVariants } from './animations';
import CallToAction from './CallToAction';
import { Body, Heading, StyledHeroInfo } from './styles';
import { HeroInfoProps } from './types';

const HeroInfo = (props: HeroInfoProps) => (
  <StyledHeroInfo>
    <Heading initial="hidden" animate="visible" variants={headingVariants}>
      {props.heading}
    </Heading>
    <Body initial="hidden" animate="visible" variants={aboutVariants}>
      {props.description}
    </Body>
    <CallToAction href={props.href} label="Get in Touch!" />
  </StyledHeroInfo>
);

export default HeroInfo;