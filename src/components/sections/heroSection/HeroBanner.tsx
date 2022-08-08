import Image from 'next/image';
import styled from 'styled-components';

const HeroBanner = styled(Image)`
  position: absolute;
  opacity: 0.4;
  background: linear-gradient(to top, #fff 0%, #fff 100%);

  z-index: -1;
`;

export default HeroBanner;
