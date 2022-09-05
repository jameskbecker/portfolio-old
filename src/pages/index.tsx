import NavigationBar from '@/components/navigationBar';
import ContactSection from '@/components/sections/contactSection';
import ExpertiseSection from '@/components/sections/expertiseSection';
import HeroSection from '@/components/sections/heroSection';
import PortfolioSection from '@/components/sections/portfolioSection';
import Sidebar from '@/components/sidebar';
import GlobalStyles from '@/GlobalStyles';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledHome = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;

  overflow: hidden;
`;

const Home: NextPage = () => {
  return (
    <StyledHome>
      <Head>
        <title>James K. Becker</title>
        <meta name="description" content="My personal portfolio website" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, minimum-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="James's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jameskbecker.com" />
        <meta
          property="og:image"
          content="https://www.jameskbecker.com/thumbnail.jpeg"
        />
        <meta
          property="og:description"
          content="A full-stack developer specialising in frontend."
        />
        <meta name="theme-color" content="#d55347"></meta>
      </Head>
      <GlobalStyles />
      <Sidebar />
      <NavigationBar logoText="James K. Becker" />
      <HeroSection />
      <PortfolioSection />
      <ExpertiseSection />
      <ContactSection />
    </StyledHome>
  );
};

export default Home;
