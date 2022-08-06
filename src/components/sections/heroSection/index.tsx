import Image from 'next/image';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-auto-rows: max-content 1fr;
  grid-auto-flow: column;
  align-content: center;
  grid-gap: 2rem;
  height: calc(90vh - 20rem);

  background: ${({ theme }: any) => theme.heroSection};
  padding: 10rem 12rem;

  p {
    font-size: 1.5rem;
    font-weight: 300;
  }

  img {
    width: 100%;
    grid-row: span 2;
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  grid-row: span 2;
`;

const HeroSection = () => (
  <StyledHeroSection>
    <h1>Hello!</h1>
    <p>
      My name is James, I&apos;m a full-stack engineer specialising in frontend
      development and graduate of KU London. I have been programming for over 4
      years, intending to use my skills to enhance other people&apos;s lives.
    </p>
    <HeroImageContainer>
      <Image src="/cover.jpg" layout="fill" objectFit="cover" />
    </HeroImageContainer>
  </StyledHeroSection>
);

export default HeroSection;
