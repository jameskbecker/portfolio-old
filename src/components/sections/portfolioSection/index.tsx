import PortfolioCover from '@/components/sections/portfolioSection/PortfolioCover';
import Gallery from '@/features/gallery';
import screens from '@/screens';
import styled from 'styled-components';

const StyledPortfolioSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 200vh;

  padding: 0 12vw;
  border-bottom: 1px solid ${({ theme }: any) => theme.text};
  box-sizing: border-box;

  overflow: hidden;

  @media only screen and (max-width: ${screens.mobileMax}) {
    height: auto;
  }
`;

const PortfolioSection = () => (
  <StyledPortfolioSection id="portfolio">
    <PortfolioCover />
    <Gallery />
  </StyledPortfolioSection>
);

export default PortfolioSection;
