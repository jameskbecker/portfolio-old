import ParallaxText from '@/components/parallaxText';
import {
  other,
  topFour,
} from '@/components/sections/expertiseSection/expertiseData';
import {
  LowerText,
  StyledExpertiseContent,
  StyledExpertiseSection,
  UpperText,
} from './styles';

const space = '\xA0\xA0\xA0';

const ExpertiseSection = () => {
  return (
    <StyledExpertiseSection id="expertise">
      <h1>My Expertise</h1>
      <StyledExpertiseContent>
        <ParallaxText baseSpeed={-1}>
          <UpperText>{topFour.join(space)}</UpperText>
        </ParallaxText>
        <ParallaxText baseSpeed={0.5}>
          <LowerText>{other.join(space)}</LowerText>
        </ParallaxText>
      </StyledExpertiseContent>
    </StyledExpertiseSection>
  );
};

export default ExpertiseSection;
