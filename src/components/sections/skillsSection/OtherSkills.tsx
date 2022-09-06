import ParallaxText from '@/components/parallaxText';
import { Body } from '@/components/typography/Body';
import { H2 } from '@/components/typography/Headings';
import { other } from './skillsData';
import { OtherSkillsContainer, UpperText } from './styles';

const OtherSkills = () => {
  return (
    <OtherSkillsContainer>
      <H2>Other Skills</H2>
      {other.map((skill) => (
        <Body>{skill}</Body>
      ))}
    </OtherSkillsContainer>
  );
};

export default OtherSkills;
