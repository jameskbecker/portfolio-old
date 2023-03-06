const Tag = ({ label }) => (
  <div className="item-center flex flex-initial flex-wrap justify-center overflow-hidden rounded-md border border-emerald-400 p-1 dark:border-emerald-400">
    <span className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-light text-emerald-400 dark:text-emerald-400 md:text-lg">
      {label}
    </span>
  </div>
);

export default Tag;
