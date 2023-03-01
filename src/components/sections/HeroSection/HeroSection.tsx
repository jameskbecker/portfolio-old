import HeroImage from './HeroImage';
import HeroInfo from './HeroInfo';

type HeroSectionProps = {
  heading: string;
  description: string;
  href: string;
};

const HeroSection = (props: HeroSectionProps) => {
  const Content = () => (
    <div className="flex h-full flex-1  flex-col-reverse justify-between gap-16 py-24 align-middle lg:flex-row lg:justify-end lg:py-48">
      <HeroInfo {...props} />
      <HeroImage />
    </div>
  );

  return (
    <section className="relative box-border flex h-screen w-full justify-center self-center overflow-hidden bg-heroSection px-4 sm:px-8 lg:px-32">
      <Content />
    </section>
  );
};

export default HeroSection;
