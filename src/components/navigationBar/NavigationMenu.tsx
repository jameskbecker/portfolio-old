import ThemeToggle from '@/features/themeToggle';
import screens from '@/screens';
import styled from 'styled-components';

const StyledNavigationMenu = styled.ul`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  gap: 1.25rem;

  font: 500 1rem -apple-system;
  text-transform: uppercase;

  @media only screen and (max-width: ${screens.tabletMax}) {
    display: none;
  }
`;

const NavigationMenu = () => (
  <StyledNavigationMenu>
    <a href="#portfolio">Portfolio</a>
    <a href="#expertise">Expertise</a>
    {/* <a href="#services">Services</a> */}
    <a href="#contact">Contact</a>
    <ThemeToggle />
  </StyledNavigationMenu>
);

export default NavigationMenu;
