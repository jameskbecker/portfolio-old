import NavigationHeader from '@/components/navigationBar/NavigationHeader';
import NavigationMenu from '@/components/navigationBar/NavigationMenu';
import NavigationOptions from '@/components/navigationBar/NavigationOptions';
import styled from 'styled-components';

const StyledNavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 64px;

  background: ${({ theme }: any) => theme.navigation};
  padding: 0 2rem;
  border-bottom: 1px solid ${({ theme }: any) => theme.text};
  box-sizing: border-box;
  z-index: 1;
`;

const NavigationBar = () => (
  <StyledNavigationBar>
    <NavigationHeader />

    <NavigationMenu />
  </StyledNavigationBar>
);

export default NavigationBar;
