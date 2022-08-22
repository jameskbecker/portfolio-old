import Image from 'next/image';
import { imageVariants } from './animations';
import HeroBanner from './HeroBanner';
import HeroInfo from './HeroInfo';
import { HeroContent, HeroImageContainer, StyledHeroSection } from './styles';

const description =
  "My name is James, I'm a full-stack engineer specialising in frontend development and graduate of KU London. I strive to create and deliver amazing user experiences with my passion for technology.";

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
          alt="A mid-shot of James"
          layout="fill"
          objectFit="cover"
          draggable="false"
        />
      </HeroImageContainer>
    </HeroContent>
  </StyledHeroSection>
);

export default HeroSection;
