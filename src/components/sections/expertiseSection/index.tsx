import CoverPage from '@/components/cover-page';
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
      <CoverPage
        heading="My Skills"
        subheading="The opportunity to work with many different technologies has allowed me to discover where my interests lie and specialise in what I'm great at."
      />

      <StyledExpertiseContent>
        <h1>My Expertise</h1>
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
