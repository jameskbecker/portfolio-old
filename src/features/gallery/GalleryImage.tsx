import screens from '@/screens';
import styled from 'styled-components';

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

export default GalleryImage;
