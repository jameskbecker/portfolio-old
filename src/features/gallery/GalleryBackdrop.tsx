import screens from '@/screens';
import styled from 'styled-components';

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

export default GalleryBackdrop;
