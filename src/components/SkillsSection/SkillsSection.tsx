'use client';

import CoverPage from '@/components/CoverPage';
import Expertise from './Expertise';
import OtherSkills from './OtherSkills';

const SkillsSection = () => {
  return (
    <section id="skills" className="flex flex-col items-stretch bg-gray-100 dark:bg-gray-900">
      <CoverPage
        heading="My Skills"
        subheading="The opportunity to work with great people and many different technologies has allowed me to discover where my interests lie and specialise in what I'm great at."
      />

      <div className="container my-24 mx-auto box-border flex h-full flex-row items-start justify-center gap-20 px-4">
        <Expertise />
        <OtherSkills />
      </div>
    </section>
  );
};

export default SkillsSection;
