import HeroBanner from './HeroBanner';
import HeroImage from './HeroImage';
import HeroInfo from './HeroInfo';
import { HeroContent, StyledHeroSection } from './styles';

const data = {
  heading: 'Hello!',
  description:
    "My name is James, I'm a full-stack engineer specialising in frontend development and graduate of KU London. I strive to create and deliver amazing user experiences with my passion for technology.",
  href: '#contact',
};

const HeroSection = () => (
  <StyledHeroSection>
    {/* <HeroBanner /> */}
    <HeroContent>
      <HeroInfo {...data} />
      <HeroImage />
    </HeroContent>
  </StyledHeroSection>
);

export default HeroSection;
