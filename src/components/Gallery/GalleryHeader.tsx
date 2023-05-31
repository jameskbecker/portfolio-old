import Tag from '@/components/Tag';

type GalleryHeaderProps = {
  name: string;
  timeframe: string;
  tags: string[];
};

const GalleryHeader = (props: GalleryHeaderProps) => {
  const { name, timeframe, tags } = props;
  const tagContent = tags.map((t, i) => <Tag key={i} label={t} />);

  return (
    <header className="flex flex-1 flex-shrink flex-col flex-wrap  gap-2 overflow-hidden lg:flex-grow-0 lg:basis-1/3">
      <h4 className="mx-auto w-full text-center text-lg font-medium dark:text-zinc-300 md:text-xl lg:text-left">
        {name}
      </h4>
      <h5 className="mx-auto w-full text-center text-base font-normal dark:text-zinc-300 md:text-lg lg:text-left">
        {timeframe}
      </h5>
      <div className="hidden gap-2 md:flex">{tagContent}</div>
    </header>
  );
};

export default GalleryHeader;
