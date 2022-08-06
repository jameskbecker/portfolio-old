import ContactSection from '@/components/sections/contactSection';
import ExpertiseSection from '@/components/sections/expertiseSection';
import HeroSection from '@/components/sections/heroSection';
import PortfolioSection from '@/components/sections/portfolioSection';
import NavigationBar from '@/features/navigationBar';
import GlobalStyles from '@/GlobalStyles';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>James K. Becker</title>
        <meta name="description" content="My personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />

      <StyledHome>
        <NavigationBar />
        <HeroSection />
        <PortfolioSection />
        <ExpertiseSection />
        <ContactSection />
      </StyledHome>
    </div>
  );
};

export default Home;
