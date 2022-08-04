import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import PortfolioSection from '../components/PortfolioSection';
import NavigationBar from '../features/NavigationBar';
import GlobalStyles from '../GlobalStyles';

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
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <GlobalStyles />

      <StyledHome>
        <NavigationBar />
        <HeroSection />
        <PortfolioSection />
      </StyledHome>
    </div>
  );
};

export default Home;
