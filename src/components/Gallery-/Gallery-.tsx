import { AppDispatch } from '@/app/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import GalleryDetails from './GalleryDetails';
import { fetchGalleryData } from './gallerySlice';
import GalleryView from './GalleryView';
import { StyledGallery } from './styles';

const Gallery = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGalleryData());
  }, [dispatch]);

  return (
    <StyledGallery>
      <GalleryView />
      <GalleryDetails />
    </StyledGallery>
  );
};

export default Gallery;
