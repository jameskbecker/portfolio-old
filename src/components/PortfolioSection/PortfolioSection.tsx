import CoverPage from '@/components/CoverPage';
import Gallery from '@/components/Gallery';
import { GalleryProps } from '../Gallery/Gallery';

const heading = 'Showcase';
const subheading =
  "I've completed many projects in my career so far. Here are the ones I am the proudest of!";

export type PortfolioSectionProps = {
  projectData: GalleryProps['data'];
};

const PortfolioSection = (props: PortfolioSectionProps) => {
  return (
    <section
      id="portfolio"
      className="box-border flex h-auto flex-col overflow-hidden bg-zinc-100 p-0 dark:bg-zinc-900"
    >
      <CoverPage heading={heading} subheading={subheading} />
      <Gallery data={props.projectData} />
    </section>
  );
};

export default PortfolioSection;
