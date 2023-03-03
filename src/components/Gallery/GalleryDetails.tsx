import { Dispatch, SetStateAction } from 'react';
import GalleryHeader from './GalleryHeader';
import GalleryNavButton from './GalleryNavButton';

type GalleryDetailsProps = {
  name: string;
  timeframe: string;
  tags: string[];
  description: string;
  onPrevious: () => void;
  onNext: () => void;
};

const GalleryDetails = (props: GalleryDetailsProps) => {
  const { description, ...headerProps } = props;

  return (
    <div className="container mx-auto flex basis-40 flex-row items-center justify-evenly gap-6 overflow-hidden px-4 py-4">
      <GalleryNavButton prev onClick={props.onPrevious} />

      <GalleryHeader {...headerProps} />
      <p className="hidden overflow-hidden text-ellipsis text-base font-light text-zinc-700 dark:text-gray-500 md:text-lg lg:block lg:flex-shrink lg:basis-3/4">
        {description}
      </p>

      <GalleryNavButton onClick={props.onNext} />
    </div>
  );
};

export default GalleryDetails;
