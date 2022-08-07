import { toggleTheme } from '@/features/themeToggle/themeToggleSlice';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledThemeToggle = styled.div`
  opacity: 0.8;
  cursor: pointer;

  :hover {
    opacity: 1;
    transition: 250ms ease-in-out;
  }
`;

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state: any) => state.theme);

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <StyledThemeToggle onClick={handleClick}>
      <FontAwesomeIcon icon={!isDark ? faSun : faMoon} />
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
