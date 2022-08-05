import styled from 'styled-components';
import Gallery from '../../features/gallery';
import PortfolioCover from './PortfolioCover';

const StyledPortfolioSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 200vh;

  padding: 1.5 0;
`;

const PortfolioSection = () => (
  <StyledPortfolioSection id="portfolio">
    <PortfolioCover />
    <Gallery />
  </StyledPortfolioSection>
);

export default PortfolioSection;
