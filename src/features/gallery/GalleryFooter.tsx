import screens from '@/screens';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledGalleryFooter = styled.div`
  flex-basis: 15vh;
  grid-area: details;

  display: grid;
  grid-template-columns: 3fr 6fr;
  grid-auto-rows: min-content min-content;
  grid-auto-flow: column;
  grid-gap: 0 1.5rem;
  align-self: center;

  width: 100%;

  padding: 1rem 0;
  margin: 0;

  overflow: hidden;

  h5,
  h6 {
    text-transform: uppercase;
  }

  h5 {
    font-weight: 600;
  }

  @media only screen and (max-width: ${screens.tabletMax}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Description = styled.p`
  font-weight: 300;
  grid-row: span 3;

  @media only screen and (max-width: ${screens.tabletMax}) {
    display: none;
  }
`;

const GalleryFooter = () => {
  const { position, data, isLoading } = useSelector(
    (state: any) => state.gallery
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <StyledGalleryFooter>
      <h5>{data[position].name}</h5>
      <h6>{data[position].type.join(' • ')}</h6>
      <Description>{data[position].description}</Description>
    </StyledGalleryFooter>
  );
};

export default GalleryFooter;
