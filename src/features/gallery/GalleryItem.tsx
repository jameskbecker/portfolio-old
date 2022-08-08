import screens from '@/screens';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledGalleryItem = styled.div`
  position: relative;
  /* flex: 1 0 auto; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100%;

  overflow: hidden;

  grid-area: view;

  @media only screen and (max-width: ${screens.mobileMax}) {
    align-items: flex-end;
  }
`;

const GalleryBackdrop = styled.img`
  position: absolute;
  top: 0;
  width: 100%;

  filter: blur(5px);
  object-fit: cover;
  object-position: top;
  overflow: hidden;
  z-index: -1;

  @media only screen and (max-width: ${screens.mobileMax}) {
    display: none;
  }
`;

const GalleryImage = styled.img`
  position: absolute;
  height: 90%;
  max-width: 100%;

  border-radius: 0.75rem;

  object-fit: scale-down;

  @media only screen and (max-width: ${screens.mobileMax}) {
    width: 100vh;
    height: auto;
    aspect-ratio: 1 /1;
    object-position: bottom;
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
