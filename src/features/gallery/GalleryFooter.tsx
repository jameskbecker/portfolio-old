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

  padding: 1rem;
  margin: 0;

  overflow: hidden;

  h4,
  h5 {
    text-transform: uppercase;
  }

  h4 {
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
      <h4>{data[position].name}</h4>
      <h5>{data[position].type.join(' • ')}</h5>
      <Description>{data[position].description}</Description>
    </StyledGalleryFooter>
  );
};

export default GalleryFooter;
