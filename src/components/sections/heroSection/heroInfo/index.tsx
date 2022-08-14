import { textAnimation } from '../animations';
import CallToAction from './CallToAction';
import { Body, Heading, StyledHeroInfo } from './styles';
import { HeroInfoProps } from './types';

const HeroInfo = (props: HeroInfoProps) => (
  <StyledHeroInfo>
    <Heading {...textAnimation} transition={{ duration: 0.5, delay: 0 }}>
      {props.heading}
    </Heading>
    <Body {...textAnimation} transition={{ duration: 0.5, delay: 0.15 }}>
      {props.description}
    </Body>
    <CallToAction href={props.href} label="Get in Touch!" />
  </StyledHeroInfo>
);

export default HeroInfo;
