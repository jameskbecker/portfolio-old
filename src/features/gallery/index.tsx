import { AppDispatch } from '@/app/store';
import GalleryDetails from '@/features/gallery/GalleryDetails';
import { fetchGalleryData } from '@/features/gallery/gallerySlice';
import GalleryView from '@/features/gallery/GalleryView';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
