import { toggleTheme } from '@/features/themeToggle/themeToggleSlice';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAnimationControls } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { toggleVariants } from './animations';
import { StyledThemeToggle } from './styles';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const controls = useAnimationControls();
  const { isDark } = useSelector((state: any) => state.theme);

  const handleClick = () => {
    controls.set(!isDark ? 'dark' : 'light');
    dispatch(toggleTheme());
  };

  const handleHover = () => {
    controls.start(isDark ? 'hoverDark' : 'hover');
  };

  const handleHoverEnd = () => {
    controls.set(isDark ? 'dark' : 'light');
  };

  return (
    <StyledThemeToggle
      initial="light"
      animate={controls}
      variants={toggleVariants}
      onHoverStart={handleHover}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faAdjust} />
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
