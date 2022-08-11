import screens from '@/screens';
import styled from 'styled-components';

const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  height: 100%;

  padding: 12vw;
  box-sizing: border-box;

  @media only screen and (max-width: ${screens.tabletMax}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default HeroContent;
