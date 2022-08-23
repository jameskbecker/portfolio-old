import Image from 'next/image';
import { StyledHeroBanner, StyledOverlay } from './styles';

const HeroBanner = () => (
  <StyledHeroBanner>
    <Image
      src="/hero-banner.png"
      alt=""
      layout="fill"
      objectFit="cover"
      draggable="false"
      priority
    />
    <StyledOverlay />
  </StyledHeroBanner>
);

export default HeroBanner;
