import CoverPage from '@/components/cover-page';
import Gallery from '@/features/gallery';
import { StyledPortfolioSection } from './styles';

const heading = 'My Portfolio';
const subheading =
  "I've completed many projects in my career so far. Here are the ones I am the proudest of!";

const PortfolioSection = () => (
  <StyledPortfolioSection id="portfolio">
    <CoverPage heading={heading} subheading={subheading} />
    <Gallery />
  </StyledPortfolioSection>
);

export default PortfolioSection;
