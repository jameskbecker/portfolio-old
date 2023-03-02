import { other } from './skillsData';

const OtherSkills = () => {
  return (
    <div className="hidden flex-initial flex-col gap-2 overflow-hidden lg:flex">
      <h2 className="text-5xl font-semibold uppercase text-heading lg:text-6xl">Other Skills</h2>
      {other.map((skill, i) => (
        <div key={i} className="text-xl font-light text-text md:text-2xl">
          {skill}
        </div>
      ))}
    </div>
  );
};

export default OtherSkills;
