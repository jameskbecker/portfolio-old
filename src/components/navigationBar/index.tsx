import NavigationHeader from '@/components/navigationBar/NavigationHeader';
import NavigationMenu from '@/components/navigationBar/NavigationMenu';
import NavigationOptions from '@/components/navigationBar/NavigationOptions';
import styled from 'styled-components';

const StyledNavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 8vh;

  background: ${({ theme }: any) => theme.navigation};
  padding: 0 2rem;
  /* border-bottom: 1px solid black; */
  box-shadow: 1px 1px 3px ${({ theme }: any) => theme.shadow};
  z-index: 1;
`;

const NavigationBar = () => (
  <StyledNavigationBar>
    <NavigationHeader />

    <NavigationMenu />
    <NavigationOptions />
  </StyledNavigationBar>
);

export default NavigationBar;
