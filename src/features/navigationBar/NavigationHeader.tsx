import styled from 'styled-components';

const StyledNavigationHeader = styled.div`
  flex: 1 1;

  font-weight: 700;
  text-transform: uppercase;
`;

const NavigationHeader = () => (
  <StyledNavigationHeader>James K. Becker</StyledNavigationHeader>
);

export default NavigationHeader;
