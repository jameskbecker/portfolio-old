import Image from 'next/image';
import { imageVariants } from './animations';
import { StyledHeroImage } from './styles';

const HeroImage = () => (
  <StyledHeroImage initial="hidden" animate="visible" variants={imageVariants}>
    <Image
      src="/cover.jpg"
      alt="A mid-shot of James"
      layout="fill"
      objectFit="cover"
      draggable="false"
      priority
      sizes={'520px'}
    />
  </StyledHeroImage>
);

export default HeroImage;
