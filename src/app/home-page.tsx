'use client';

import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';
import NavigationBar from '@/components/NavigationBar';
import PortfolioSection from '@/components/PortfolioSection';
import SkillsSection from '@/components/SkillsSection';
import { format, parseISO } from 'date-fns';

type HomePageProps = {
  projectData: any[];
};

export default function HomePage(props: HomePageProps) {
  return (
    <div className="relative m-0 flex flex-col overflow-hidden p-0 selection:bg-emerald-500 dark:selection:bg-emerald-400">
      <NavigationBar logoText="James K. Becker" />
      <HeroSection
        heading="Hello!"
        description="My name is James, I'm a full-stack engineer specialising in frontend development and graduate of KU London. I strive to create and deliver amazing user experiences with my passion for technology."
        href="#contact"
      />
      <PortfolioSection {...props} />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
