const Tag = ({ label }) => (
  <div className="item-center flex flex-initial flex-wrap justify-center overflow-hidden rounded-md border border-violet-500 p-1 dark:border-violet-400">
    <span className="select-none overflow-hidden text-ellipsis whitespace-nowrap text-base font-light text-violet-500 dark:text-violet-400 md:text-lg">
      {label}
    </span>
  </div>
);

export default Tag;
