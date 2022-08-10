import screens from '@/screens';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GalleryBackdrop from './GalleryBackdrop';
import GalleryImage from './GalleryImage';

const StyledGalleryItem = styled.div`
  position: relative;
  grid-area: view;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100%;

  box-sizing: border-box;
  overflow: hidden;

  @media only screen and (max-width: ${screens.mobileMax}) {
    align-items: flex-end;
  }
`;

const GalleryItem = () => {
  const { position, data, isLoading } = useSelector(
    (state: any) => state.gallery
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <StyledGalleryItem>
      {/* <GalleryBackdrop src={data[position].image} /> */}

      <GalleryImage src={data[position].image} />
    </StyledGalleryItem>
  );
};

export default GalleryItem;
