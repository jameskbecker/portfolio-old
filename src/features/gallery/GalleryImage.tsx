import Image from 'next/image';
import { StyledGalleryImage } from './styles';

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
  </StyledGalleryImage>
);

export default GalleryImage;
