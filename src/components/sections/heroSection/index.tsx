import Image from 'next/image';
import { imageVariants } from './animations';
import HeroBanner from './HeroBanner';
import HeroInfo from './HeroInfo';
import { HeroContent, HeroImageContainer, StyledHeroSection } from './styles';

const description =
  "My name is James, I'm a full-stack engineer specialising in frontend development and graduate of KU London. I have been programming for over 4 years, intending to use my skills to enhance other people's lives.";

const HeroSection = () => (
  <StyledHeroSection>
    <HeroBanner />
    <HeroContent>
      <HeroInfo heading="Hello!" description={description} href="#contact" />
      <HeroImageContainer
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <Image
          src="/cover.jpg"
          layout="fill"
          objectFit="cover"
          draggable="false"
        />
      </HeroImageContainer>
    </HeroContent>
  </StyledHeroSection>
);

export default HeroSection;
