import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AppDispatch } from '../../app/store';
import GalleryFooter from './GalleryFooter';
import GalleryItem from './GalleryItem';
import { fetchGalleryData } from './gallerySlice';

const StyledGallery = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
`;

const Gallery = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGalleryData());
  }, []);

  return (
    <StyledGallery>
      <GalleryItem />
      <GalleryFooter />
    </StyledGallery>
  );
};

export default Gallery;
