import { other } from './skillsData';

const OtherSkills = () => {
  return (
    <div className="hidden flex-initial flex-col gap-2 overflow-hidden lg:flex">
      <h2 className="text-5xl font-semibold uppercase text-zinc-900 dark:text-zinc-100 lg:text-6xl">
        Other Skills
      </h2>
      {other.map((skill, i) => (
        <div key={i} className="text-xl font-light text-zinc-500 dark:text-zinc-500 md:text-2xl">
          {skill}
        </div>
      ))}
    </div>
  );
};

export default OtherSkills;
