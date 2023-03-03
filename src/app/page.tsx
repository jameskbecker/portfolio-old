import HomePage from './home-page';

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

async function getProjects() {
  const res = await fetch('http://localhost:3000/api/portfolio', { cache: 'no-store' });
  const projects = await res.json();
  return projects.data;
}

export default async function Page() {
  const data = await getProjects();

  return <HomePage portfolioData={data} />;
}
