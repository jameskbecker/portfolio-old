import CoverPage from '@/components/CoverPage';
import List from '../List';
import Expertise from './Expertise';
import OtherSkills from './OtherSkills';

type Skills = {
  frontend: string[];
  backend: string[];
  design: string[];
  skills: string[];
  'tooling & platforms': string[];
  'programming languages': string[];
};

type SkillsSectionProps = {
  data: Skills;
};

const SkillsSection = ({ data }: SkillsSectionProps) => {
  return (
    <section id="skills" className="flex flex-col items-stretch bg-zinc-100 dark:bg-zinc-900">
      <CoverPage
        heading="My Skills"
        subheading="The opportunity to work with great people and many different technologies has allowed me to discover where my interests lie and specialise in what I'm great at."
      />

      <div className="container my-24 mx-auto box-border flex h-full flex-col justify-center gap-8 px-4 md:grid md:auto-rows-auto md:grid-cols-2 lg:grid-cols-3">
        <List heading="Frontend" items={data.frontend} />
        <List heading="Tooling & Platforms" items={data['tooling & platforms']} />
        <List heading="Collaboration" items={data.skills} />
        <List heading="Programming Languages" items={data['programming languages']} />

        <List heading="Backend" items={data.backend} />
        <List heading="Design" items={data.design} />
        {/* <Expertise />
        <OtherSkills /> */}
      </div>
    </section>
  );
};

export default SkillsSection;
