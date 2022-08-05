import { AppDispatch } from '@/app/store';
import GalleryFooter from '@/features/gallery/GalleryFooter';
import GalleryItem from '@/features/gallery/GalleryItem';
import { fetchGalleryData } from '@/features/gallery/gallerySlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const StyledGallery = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
`;

const Gallery = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGalleryData());
  }, [dispatch]);

  return (
    <StyledGallery>
      <GalleryItem />
      <GalleryFooter />
    </StyledGallery>
  );
};

export default Gallery;
