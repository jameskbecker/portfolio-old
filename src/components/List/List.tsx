type ListProps = {
  heading?: string;
  items: string[];
};

const List = (props: ListProps) => {
  const renderItems = (item: string, i: number) => (
    <li
      key={i}
      className="text-center text-xl font-light text-slate-500 marker:text-black dark:text-slate-500 md:text-2xl"
    >
      {item}
    </li>
  );

  return (
    <div className="flex flex-initial flex-col gap-2 overflow-hidden">
      {props.heading && (
        <h2 className="text-center text-xl font-semibold uppercase text-slate-900 dark:text-slate-100 lg:text-2xl">
          {props.heading}
        </h2>
      )}
      <ul className="flex flex-col gap-2">{props.items.map(renderItems)}</ul>
    </div>
  );
};

export default List;
