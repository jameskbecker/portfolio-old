import { AppDispatch } from '@/app/store';
import ChevronLeft from '@/assets/icons/chevron-left.svg';
import ChevronRight from '@/assets/icons/chevron-right.svg';
import { useDispatch } from 'react-redux';
import { nextItem, previousItem } from './gallerySlice';
import { NextContainer, PrevContainer, StyledGalleryNavButton } from './styles';

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

  if (prev) {
    return (
      <PrevContainer>
        <StyledGalleryNavButton onClick={handlePrevious}>
          <ChevronLeft />
        </StyledGalleryNavButton>
      </PrevContainer>
    );
  }

  return (
    <NextContainer>
      <StyledGalleryNavButton onClick={handleNext}>
        <ChevronRight />
      </StyledGalleryNavButton>
    </NextContainer>
  );
};

export default GalleryNavButton;
