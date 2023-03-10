import ChevronLeft from '@/assets/icons/chevron-left.svg';
import ChevronRight from '@/assets/icons/chevron-right.svg';

type GalleryNavButtonProps = {
  prev?: true;
  onClick: () => void;
};

const GalleryNavButton = (props: GalleryNavButtonProps) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div
        onClick={props.onClick}
        role="button"
        aria-label={props.prev ? 'Previous Gallery Item' : 'Next Gallery Item'}
        className="flex h-16 w-16 cursor-pointer items-center justify-center self-center rounded-full fill-text hover:fill-brand hover:duration-300 hover:ease-in-out dark:hover:fill-brandDark"
      >
        {props.prev ? <ChevronLeft /> : <ChevronRight />}
      </div>
    </div>
  );
};

export default GalleryNavButton;
