const Tag = ({ label }) => (
  <div className="item-center flex flex-initial flex-wrap justify-center overflow-hidden rounded-md border border-brand p-1 dark:border-brandDark">
    <span className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-light text-brand dark:text-brandDark md:text-lg">
      {label}
    </span>
  </div>
);

export default Tag;
