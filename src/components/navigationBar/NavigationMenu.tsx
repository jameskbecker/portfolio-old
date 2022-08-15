import ThemeToggle from '@/features/themeToggle';
import routes from '@/routes';
import { NavigationLink, StyledNavigationMenu } from './styles';

const NavigationMenu = () => (
  <StyledNavigationMenu>
    {routes.map((route, i) => (
      <NavigationLink key={i} href={route.to}>
        {route.name}
      </NavigationLink>
    ))}
    <ThemeToggle />
  </StyledNavigationMenu>
);

export default NavigationMenu;
