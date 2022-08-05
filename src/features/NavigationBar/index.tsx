import styled from 'styled-components';
import NavigationHeader from './NavigationHeader';
import NavigationMenu from './NavigationMenu';
import NavigationOptions from './NavigationOptions';

const StyledNavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 10vh;

  background: ${({ theme }: any) => theme.navigation};
  padding: 0 2rem;
`;

const NavigationBar = () => (
  <StyledNavigationBar>
    <NavigationHeader />
    <NavigationMenu />
    <NavigationOptions />
  </StyledNavigationBar>
);

export default NavigationBar;
