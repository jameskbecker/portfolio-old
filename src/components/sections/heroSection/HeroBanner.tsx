import Image from 'next/image';
import styled from 'styled-components';

const StyledHeroBanner = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  opacity: 0.4;
`;

const Overlay = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  z-index: -2;

  background: linear-gradient(
    365deg,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const HeroBanner = () => (
  <StyledHeroBanner>
    <Image
      style={{ zIndex: '-2' }}
      src="/hero-banner.png"
      layout="fill"
      objectFit="cover"
    />
    <Overlay />
  </StyledHeroBanner>
);

export default HeroBanner;
