import screens from '@/screens';
import styled from 'styled-components';

export const StyledNavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 64px;

  background: ${({ theme }: any) => theme.navigation};
  padding: 0 2rem;
  border-bottom: 1px solid ${({ theme }: any) => theme.text};
  box-sizing: border-box;
  z-index: 1;
`;

export const StyledNavigationHeader = styled.div`
  flex: 1 1;

  font-weight: 700;
  color: ${({ theme }) => theme.text};
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

  a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :hover {
      color: ${({ theme }: any) => theme.brand};
      transiton: 100ms ease-in;
    }
  }

  @media only screen and (max-width: ${screens.tabletMax}) {
    display: none;
  }
`;

export const StyledNavigationOptions = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
