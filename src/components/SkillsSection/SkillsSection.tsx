import CoverPage from '@/components/CoverPage';
import Expertise from './Expertise';
import OtherSkills from './OtherSkills';

const SkillsSection = () => {
  return (
    <section id="skills" className="flex flex-col items-stretch">
      <CoverPage
        heading="My Skills"
        subheading="The opportunity to work with many different technologies has allowed me to discover where my interests lie and specialise in what I'm great at."
      />

      <div className="my-24 mx-8 box-border flex h-full flex-row items-start justify-center gap-20">
        <Expertise />
        <OtherSkills />
      </div>
    </section>
  );
};

export default SkillsSection;
