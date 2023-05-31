import HeroImage from './HeroImage';
import HeroInfo from './HeroInfo';

type HeroSectionProps = {
  heading: string;
  description: string;
  href: string;
};

const HeroSection = (props: HeroSectionProps) => {
  const Content = () => (
    <div className="container mx-auto flex h-full flex-1 flex-col-reverse justify-between gap-2 px-4 py-24 align-middle lg:flex-row lg:justify-end lg:gap-16 lg:py-48">
      <HeroInfo {...props} />
      <HeroImage />
    </div>
  );

  return (
    <section className="relative box-border flex h-screen w-full justify-center self-center overflow-hidden bg-zinc-50 dark:bg-zinc-900">
      <Content />
    </section>
  );
};

export default HeroSection;
