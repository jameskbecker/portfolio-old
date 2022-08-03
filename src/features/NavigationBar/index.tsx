import styled from 'styled-components';
import lightTheme from '../../theme';
import NavigationHeader from './NavigationHeader';
import NavigationMenu from './NavigationMenu';
import NavigationOptions from './NavigationOptions';

const StyledNavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 10vh;

  background: ${lightTheme.navigation};
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
