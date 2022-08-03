import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledNavigationOptions = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const NavigationOptions = () => (
  <StyledNavigationOptions>
    <FontAwesomeIcon icon={faSun} />
  </StyledNavigationOptions>
);

export default NavigationOptions;
