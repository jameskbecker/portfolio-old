import NavigationMenu from '@/components/navigationBar/NavigationMenu';
import { StyledNavigationBar, StyledNavigationHeader } from './styles';

const NavigationBar = () => (
  <StyledNavigationBar>
    <StyledNavigationHeader>James K. Becker</StyledNavigationHeader>
    <NavigationMenu />
  </StyledNavigationBar>
);

export default NavigationBar;
