import CoverPage from '@/components/CoverPage';
import Expertise from './expertise';
import OtherSkills from './OtherSkills';
import { StyledSkillsContent, StyledSkillsSection } from './styles';

const SkillsSection = () => {
  return (
    <StyledSkillsSection id="skills">
      <CoverPage
        heading="My Skills"
        subheading="The opportunity to work with many different technologies has allowed me to discover where my interests lie and specialise in what I'm great at."
      />

      <StyledSkillsContent>
        <Expertise />
        <OtherSkills />
      </StyledSkillsContent>
    </StyledSkillsSection>
  );
};

export default SkillsSection;
