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
import {
  NavContainer,
  NextContainer,
  PrevContainer,
  StyledGallery,
} from './styles';

const Gallery = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGalleryData());
  }, [dispatch]);

  return (
    <StyledGallery>
      <GalleryItem />

      <GalleryDetails />

      <PrevContainer>
        <GalleryNavButton prev />
      </PrevContainer>
      <NextContainer>
        {' '}
        <GalleryNavButton />
      </NextContainer>
    </StyledGallery>
  );
};

export default Gallery;
