import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';
import NavigationBar from '@/components/NavigationBar';
import PortfolioSection from '@/components/PortfolioSection';
import SkillsSection from '@/components/SkillsSection';
import client from '@/sanity';
import { format } from 'date-fns';
import { groq } from 'next-sanity';

export const revalidate = 0;
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

const formatDate = (v: string) => {
  const splitInput = v.split('-');
  const [year, month] = splitInput;

  const date = new Date(parseInt(year), parseInt(month) - 1);
  return format(date, 'MMMM yyyy');
};

const parseData = v => ({
  name: v.project_name,
  timeframe: `${formatDate(v.start_date)} - ${formatDate(v.end_date)}`,
  tags: v.tags,
  description: v.description,
  image: v.image,
  alt: `Screenshot of ${v.project_name}`,
});

export default async function Page() {
  const query = groq`
  *[_type=='project']
`;
  const result = await client.fetch(query);
  const projects = result.map(parseData);

  return (
    <div className="relative m-0 flex flex-col overflow-hidden p-0 selection:bg-emerald-500 dark:selection:bg-emerald-400">
      <HeroSection
        heading="Hello!"
        description="My name is James, I'm a full-stack engineer specialising in frontend development and graduate of KU London. I strive to create and deliver amazing user experiences with my passion for technology."
        href="#contact"
      />
      <PortfolioSection projectData={projects} />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
