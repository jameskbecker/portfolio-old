import { AppDispatch } from '@/app/store';
import ChevronLeft from '@/assets/icons/chevron-left.svg';
import ChevronRight from '@/assets/icons/chevron-right.svg';
import { useDispatch } from 'react-redux';
import { nextItem, previousItem } from './gallerySlice';

type GalleryNavButtonProps = {
  prev?: boolean;
};

const GalleryNavButton = ({ prev }: GalleryNavButtonProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleNext = () => {
    dispatch(nextItem());
  };

  const handlePrevious = () => {
    dispatch(previousItem());
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <div
        onClick={prev ? handlePrevious : handleNext}
        className="flex h-16 w-16 cursor-pointer items-center justify-center self-center rounded-full fill-text hover:fill-brand hover:duration-300 hover:ease-in-out dark:hover:fill-brandDark"
      >
        {prev ? <ChevronLeft /> : <ChevronRight />}
      </div>
    </div>
  );
};

export default GalleryNavButton;
