import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';
import NavigationBar from '@/components/NavigationBar';
import PortfolioSection from '@/components/PortfolioSection';
import SkillsSection from '@/components/SkillsSection';
import client from '@/sanity';
import { format } from 'date-fns';
import { groq } from 'next-sanity';

export const metadata = {
  title: 'James K. Becker',
  siteName: 'James K. Becker',
  description: 'My personal portfolio website',
  viewport: 'initial-scale=1.0, width=device-width, minimum-scale=1.0',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "James's Portfolio",
    description: 'A full-stack developer specialising in frontend.',
    type: 'website',
    url: 'https://www.jameskbecker.com',
    image: 'https://www.jameskbecker.com/thumbnail.jpeg',
  },
};

export default async function Page() {
  const query = groq`
    *[_type=='project']
  `;
  const projects = await client.fetch(query);
  const data = projects.map(v => {
    const splitStart = v.start_date.split('-');
    //@todo once cache expires remove typo version
    const splitEnd = v.end_date ? v.end_date.split('-') : v.endt_date.split('-');
    const startDate = new Date(splitStart[0], splitStart[1] - 1);
    const endDate = new Date(splitEnd[0], splitEnd[1] - 1);
    return {
      name: v.project_name,
      timeframe: `${format(startDate, 'MMMM yyyy')} - ${format(endDate, 'MMMM yyyy')}`,
      tags: v.tags,
      description: v.description,
      image: v.image,
      alt: `Screenshot of ${v.project_name}`,
    };
  });

  return (
    <div className="relative m-0 flex flex-col overflow-hidden p-0 selection:bg-emerald-500 dark:selection:bg-emerald-400">
      <NavigationBar logoText="James K. Becker" />
      <HeroSection
        heading="Hello!"
        description="My name is James, I'm a full-stack engineer specialising in frontend development and graduate of KU London. I strive to create and deliver amazing user experiences with my passion for technology."
        href="#contact"
      />
      <PortfolioSection projectData={data} />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
