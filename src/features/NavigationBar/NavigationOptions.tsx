import styled from 'styled-components';
import ThemeToggle from '../themeToggle';

const StyledNavigationOptions = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const NavigationOptions = () => (
  <StyledNavigationOptions>
    <ThemeToggle />
  </StyledNavigationOptions>
);

export default NavigationOptions;
