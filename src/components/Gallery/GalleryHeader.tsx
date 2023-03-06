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
      <h4 className="mx-auto w-full text-left text-lg font-medium dark:text-gray-300 md:text-xl">
        {name}
      </h4>
      <h5 className="mx-auto w-full text-base font-normal dark:text-gray-300 md:text-lg">
        {timeframe}
      </h5>
      <div className="hidden gap-2 md:flex">{tagContent}</div>
    </header>
  );
};

export default GalleryHeader;
