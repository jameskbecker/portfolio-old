import { AppDispatch } from '@/app/store';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { nextItem, previousItem } from './gallerySlice';
import { StyledGalleryNavButton } from './styles';

const GalleryNavButton = ({ prev }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleNext = () => {
    dispatch(nextItem());
  };

  const handlePrevious = () => {
    dispatch(previousItem());
  };

  return (
    <StyledGalleryNavButton
      prev={prev}
      onClick={prev ? handlePrevious : handleNext}
    >
      <FontAwesomeIcon icon={prev ? faChevronLeft : faChevronRight} />
    </StyledGalleryNavButton>
  );
};

export default GalleryNavButton;
