import ThemeToggle from '@/features/themeToggle';
import styled from 'styled-components';

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
