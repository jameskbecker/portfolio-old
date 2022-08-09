import screens from '@/screens';
import Image from 'next/image';
import styled from 'styled-components';

const GalleryImageContainer = styled.div`
  position: relative;
  flex: 1 1;
  height: 100%;
  width: auto;

  border-radius: 0.75rem;
  overflow: hidden;

  @media only screen and (max-width: ${screens.tabletMax}) {
    width: 100%;
    /* height: auto; */
  }
`;

const GalleryImage = (props: any) => (
  <GalleryImageContainer>
    <Image
      layout="fill"
      className="rounded-full"
      objectFit="cover"
      objectPosition="top left"
      draggable="false"
      {...props}
    />
  </GalleryImageContainer>
);

export default GalleryImage;
