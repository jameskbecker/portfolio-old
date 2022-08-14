import screens from '@/screens';
import styled from 'styled-components';

export const StyledPortfolioSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 200vh;

  padding: 0 12vw;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }: any) => theme.text};
  box-sizing: border-box;

  overflow: hidden;

  @media only screen and (max-width: ${screens.mobileMax}) {
    height: auto;
  }
`;

export const StyledPortfolioCover = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  height: 50%;
`;
