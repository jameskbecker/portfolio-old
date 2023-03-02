import { topFour } from './skillsData';

const Expertise = () => {
  return (
    <div className="flex h-full flex-1 flex-col gap-2 overflow-hidden">
      <h2 className="text-5xl font-semibold uppercase text-slate-900 dark:text-slate-100 lg:text-6xl">
        My Expertise
      </h2>
      {topFour.map((skill, i) => (
        <div
          key={i}
          className="text-4xl font-light uppercase text-slate-500 dark:text-slate-500 md:text-7xl lg:text-8xl"
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default Expertise;
