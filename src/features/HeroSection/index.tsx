import styled from 'styled-components';
import lightTheme from '../../theme';

const StyledHeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content auto;
  grid-auto-flow: column;
  align-content: center;
  grid-gap: 2rem;
  height: 90vh;

  background: ${lightTheme.heroSection};
  padding: 0 12rem;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
  }

  img {
    width: 100%;
    grid-row: span 2;
  }
`;

const HeroSection = () => (
  <StyledHeroSection>
    <h1>Hello!</h1>
    <p>
      My name is James, I'm a full-stack developer specialising in frontend
      development and graduate of KU London. I have been programming for over 4
      years, intending to use my skills to enhance other people's lives.
    </p>

    <img src="https://avatars.githubusercontent.com/u/48602730?v=4" />
  </StyledHeroSection>
);

export default HeroSection;
