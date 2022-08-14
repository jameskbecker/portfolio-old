import Marquee from '@/components/marquee';
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
        <Marquee>
          <UpperText>
            {topFour.join(space)} {space}
          </UpperText>
        </Marquee>
        <Marquee reverse>
          <LowerText>
            {other.join(space)} {space}
          </LowerText>
        </Marquee>
      </StyledExpertiseContent>
    </StyledExpertiseSection>
  );
};

export default ExpertiseSection;
