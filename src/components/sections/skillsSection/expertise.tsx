import { BodyLarge } from '@/components/typography/Body';
import { H2 } from '@/components/typography/Headings';
import { topFour } from './skillsData';
import { ExpertiseContainer } from './styles';

const Expertise = () => {
  return (
    <ExpertiseContainer>
      <H2>My Expertise</H2>
      {topFour.map((skill, i) => (
        <BodyLarge key={i}>{skill}</BodyLarge>
      ))}
    </ExpertiseContainer>
  );
};

export default Expertise;
