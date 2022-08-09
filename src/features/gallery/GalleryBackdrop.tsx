import screens from '@/screens';
import Image from 'next/image';
import styled from 'styled-components';

const GalleryBackdrop = styled(Image)`
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
