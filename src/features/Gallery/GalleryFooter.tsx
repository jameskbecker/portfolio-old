import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppDispatch } from '../../app/store';
import GalleryNavButton from './GalleryNavButton';
import { nextItem, previousItem } from './gallerySlice';

const StyledGalleryFooter = styled.div`
  flex-basis: 15vh;
  display: grid;
  grid-template-columns: 1fr 3fr 6fr 1fr;
  grid-auto-rows: min-content min-content auto;
  grid-auto-flow: column;
  grid-gap: 0 1.5rem;
  padding: 1rem;
  margin: 0 12rem;
  overflow: hidden;

  p {
    font-weight: 300;
    grid-row: span 3;
  }

  h4,
  h5 {
    text-transform: uppercase;
  }
`;

const GalleryFooter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { position, data, isLoading } = useSelector(
    (state: any) => state.gallery
  );

  const handleNext = () => {
    dispatch(nextItem());
  };

  const handlePrevious = () => {
    dispatch(previousItem());
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <StyledGalleryFooter>
      <GalleryNavButton onClick={handlePrevious}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </GalleryNavButton>

      <h4>{data[position].name}</h4>
      <h5>{data[position].type.join(' • ')}</h5>
      <div></div>

      <p>{data[position].description}</p>

      <GalleryNavButton onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </GalleryNavButton>
    </StyledGalleryFooter>
  );
};

export default GalleryFooter;
