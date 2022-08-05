import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledGalleryItem = styled.div`
  position: relative;
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  overflow: hidden;
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
`;

const GalleryImage = styled.img`
  position: absolute;
  height: 90%;
  object-fit: scale-down;
  filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.25));
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
      <GalleryBackdrop src={data[position].image} />
      <GalleryImage src={data[position].image} />
    </StyledGalleryItem>
  );
};

export default GalleryItem;
