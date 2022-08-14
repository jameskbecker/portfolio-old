import Image from 'next/image';
import { StyledHeroBanner, StyledOverlay } from './styles';

const HeroBanner = () => (
  <StyledHeroBanner>
    <Image
      style={{ zIndex: '-2' }}
      src="/hero-banner.png"
      layout="fill"
      objectFit="cover"
      draggable="false"
    />
    <StyledOverlay />
  </StyledHeroBanner>
);

export default HeroBanner;
