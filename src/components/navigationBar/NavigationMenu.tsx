import ThemeToggle from '@/features/themeToggle';
import screens from '@/screens';
import styled from 'styled-components';

const StyledNavigationMenu = styled.ul`
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
    opacity: 0.7;
    cursor: pointer;

    :hover {
      opacity: 1;
      transiton: 100ms ease-in;
    }
  }

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
