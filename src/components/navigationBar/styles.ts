import Bars from '@/assets/icons/bars.svg';
import { tabletMax } from '@/screens';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  display: flex;
  flex-direction: column;
`;

export const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  background: ${({ theme }) => theme.background};
  box-shadow: 0 0.5px 3px black;

  overflow: hidden;
  box-sizing: border-box;

  & > * {
    color: ${({ theme }) => theme.heading} !important;
  }
`;

export const StyledNavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  height: 64px;

  background: ${({ theme }: any) => theme.heroSection};
  padding: 0 24px;
  box-sizing: border-box;
`;

export const StyledNavigationHeader = styled.div`
  flex: 1 1;

  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) => theme.navigationText};
  text-transform: uppercase;
`;

export const StyledNavigationMenu = styled.ul`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
  height: 100%;

  font: 500 1rem -apple-system;
  text-transform: uppercase;

  @media only screen and (${tabletMax}) {
    display: none;
  }
`;

export const StyledNavigationOptions = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const StyledBars = styled(motion(Bars))`
  display: none;
  fill: ${({ theme }) => theme.navigationText};

  @media only screen and (${tabletMax}) {
    display: block;
  }
`;

export const NavigationLink = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }: any) => theme.navigationText};
  cursor: pointer;

  :hover {
    color: ${({ theme }: any) => theme.brand};
    transiton: 100ms ease-in;
  }
`;
