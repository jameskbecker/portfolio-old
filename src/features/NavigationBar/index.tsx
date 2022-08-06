import NavigationHeader from '@/features/navigationBar/NavigationHeader';
import NavigationMenu from '@/features/navigationBar/NavigationMenu';
import NavigationOptions from '@/features/navigationBar/NavigationOptions';
import styled from 'styled-components';

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
