import { AppDispatch } from '@/app/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import GalleryDetails from './GalleryDetails';
import { fetchGalleryData } from './gallerySlice';
import GalleryView from './GalleryView';

const Gallery = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGalleryData());
  }, [dispatch]);

  return (
    <div className="flex h-screen flex-col text-center lg:text-left">
      <GalleryView />
      <GalleryDetails />
    </div>
  );
};

export default Gallery;
