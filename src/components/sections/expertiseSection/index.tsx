import Marquee from '@/components/marquee';
import ExpertiseContent from '@/components/sections/expertiseSection/ExpertiseContent';
import {
  other,
  topFour,
} from '@/components/sections/expertiseSection/expertiseData';
import styled from 'styled-components';

const space = '\xA0\xA0\xA0';

const StyledExpertiseSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 12vw;
  border-bottom: 1px solid ${({ theme }: any) => theme.text};
  box-sizing: border-box;

  overflow: hidden;

  h1 {
    flex: 0 0 auto;
    text-align: center;
    padding: 2rem 0;
  }
`;

const UpperText = styled.span`
  font-size: 10vw;
  font-weight: 500;
  text-transform: uppercase;
`;

const LowerText = styled.span`
  font-size: 3vw;
  text-transform: none;
  color: ${({ theme }: any) => theme.subheading};
`;

const ExpertiseSection = () => {
  return (
    <StyledExpertiseSection id="expertise">
      <h1>My Expertise</h1>
      <ExpertiseContent>
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
      </ExpertiseContent>
    </StyledExpertiseSection>
  );
};

export default ExpertiseSection;
