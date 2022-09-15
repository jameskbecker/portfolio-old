import Image from 'next/image';
import styled from 'styled-components';
import { StyledGalleryImage } from './styles';

const BlurredBackground = styled(Image)`
  position: absolute;
  width: 100%;
  z-index: -1;

  filter: blur(5px);
  opacity: 0.7;

  & > img {
    margin: 10px;
  }
`;

const GalleryImage = (props: any) => (
  <StyledGalleryImage>
    <Image
      layout="fill"
      className="rounded-full"
      objectFit="contain"
      objectPosition="center"
      draggable="false"
      {...props}
    />
    <BlurredBackground
      layout="fill"
      className="rounded-full"
      objectFit="cover"
      objectPosition="top"
      draggable="false"
      {...props}
    />
  </StyledGalleryImage>
);

export default GalleryImage;
