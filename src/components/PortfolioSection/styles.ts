import { mobileMax } from '@/screens';
import styled from 'styled-components';

export const StyledPortfolioSection = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;

  padding: 0;
  box-sizing: border-box;

  overflow: hidden;

  @media only screen and (${mobileMax}) {
    height: auto;
  }
`;

export const StyledPortfolioCover = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;

  padding-top: 12vw;
  margin: 0 auto;

  & > h1 {
    text-align: left;
    width: 100%;
  }
`;
