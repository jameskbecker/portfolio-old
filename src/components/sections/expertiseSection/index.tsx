import styled from 'styled-components';
import Marquee from '../../marquee';
import ExpertiseContent from './ExpertiseContent';
import { other, topFour } from './expertiseData';

const space = '\xA0\xA0\xA0';

const StyledExpertiseSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  padding: 1.5 0;
  border-top: 1px solid black;

  overflow: hidden;

  h1 {
    flex: 0 0 auto;

    text-transform: uppercase;
    text-align: center;
    padding: 2rem 0;
  }
`;

const UpperText = styled.span`
  font-size: 15vw;
  text-transform: uppercase;
`;

const LowerText = styled.span`
  font-size: 3vw;
  text-transform: none;
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
