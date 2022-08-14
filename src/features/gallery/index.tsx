import { AppDispatch } from '@/app/store';
import GalleryDetails from '@/features/gallery/GalleryDetails';
import GalleryItem from '@/features/gallery/GalleryItem';
import {
  fetchGalleryData,
  nextItem,
  previousItem,
} from '@/features/gallery/gallerySlice';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import GalleryNavButton from './GalleryNavButton';
import { StyledGallery } from './styles';

const Gallery = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleNext = () => {
    dispatch(nextItem());
  };

  const handlePrevious = () => {
    dispatch(previousItem());
  };

  useEffect(() => {
    dispatch(fetchGalleryData());
  }, [dispatch]);

  return (
    <StyledGallery>
      <GalleryItem />
      <GalleryDetails />
      <GalleryNavButton style={{ gridArea: 'prev' }} onClick={handlePrevious}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </GalleryNavButton>
      <GalleryNavButton style={{ gridArea: 'next' }} onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </GalleryNavButton>
    </StyledGallery>
  );
};

export default Gallery;
