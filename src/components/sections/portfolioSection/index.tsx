import PortfolioCover from '@/components/sections/portfolioSection/PortfolioCover';
import Gallery from '@/features/gallery';
import { StyledPortfolioSection } from './styles';

const PortfolioSection = () => (
  <StyledPortfolioSection id="portfolio">
    <PortfolioCover />
    <Gallery />
  </StyledPortfolioSection>
);

export default PortfolioSection;
