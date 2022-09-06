import CoverPage from '@/components/coverPage';
import ParallaxText from '@/components/parallaxText';
import { other, topFour } from '@/components/sections/skillsSection/skillsData';
import { H1 } from '@/components/typography/Headings';
import {
  LowerText,
  StyledSkillsContent,
  StyledSkillsSection,
  UpperText,
} from './styles';

const space = '\xA0\xA0\xA0';

const SkillsSection = () => {
  return (
    <StyledSkillsSection id="skills">
      <CoverPage
        heading="My Skills"
        subheading="The opportunity to work with many different technologies has allowed me to discover where my interests lie and specialise in what I'm great at."
      />

      <StyledSkillsContent>
        <H1>My Expertise</H1>
        <ParallaxText baseSpeed={-1}>
          <UpperText>{topFour.join(space)}</UpperText>
        </ParallaxText>
        <ParallaxText baseSpeed={0.5}>
          <LowerText>{other.join(space)}</LowerText>
        </ParallaxText>
      </StyledSkillsContent>
    </StyledSkillsSection>
  );
};

export default SkillsSection;
