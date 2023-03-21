import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';
import SkillsSection from '@/components/SkillsSection';
import client from '@/sanity';
import { formatDate } from '@/utils/format';
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

const getProjects = async () => {
  const query = groq`*[_type=='project']`;
  const result = await client.fetch(query);

  return result.map(v => ({
    name: v.project_name,
    timeframe: `${formatDate(v.start_date)} - ${formatDate(v.end_date)}`,
    tags: v.tags,
    description: v.description,
    image: v.image,
    alt: `Screenshot of ${v.project_name}`,
  }));
};

const getSkills = async () => {
  const query = groq`*[_type=='skillset']`;
  const result = await client.fetch(query);

  return result.reduce((a, b) => {
    a[b.name.toLowerCase()] = b.skills;
    return a;
  });
};

export default async function Page() {
  const projects = await getProjects();
  const skills = await getSkills();

  return (
    <>
      <HeroSection
        heading="Hello!"
        description="My name is James, I'm a full-stack engineer specialising in frontend development and graduate of KU London. I strive to create and deliver amazing user experiences with my passion for technology."
        href="#contact"
      />
      <PortfolioSection projectData={projects} />
      <SkillsSection data={skills} />
      <ContactSection />
    </>
  );
}
