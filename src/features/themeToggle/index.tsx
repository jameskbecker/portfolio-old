import { toggleTheme } from '@/features/themeToggle/themeToggleSlice';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  motion,
  useAnimationControls,
  useInView,
  Variants,
} from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledThemeToggle = styled(motion.div)`
  opacity: 0.8;
  cursor: pointer;

  :hover {
    opacity: 1;
    transition: 250ms ease-in-out;
  }
`;

const variants: Variants = {
  default: { transform: 'rotate(0deg)', transition: { duration: 0.25 } },
  rotate: { transform: 'rotate(180deg)', transition: { duration: 0.25 } },
  hover: { transform: 'rotate(45deg)', transition: { duration: 0 } },
  hoverDark: { transform: 'rotate(225deg)', transition: { duration: 0 } },
};

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const controls = useAnimationControls();
  const { isDark } = useSelector((state: any) => state.theme);

  useEffect(() => {
    controls.set('default');
  }, []);

  const handleClick = () => {
    controls.set(!isDark ? 'hoverDark' : 'hover');
    controls.set(!isDark ? 'rotate' : 'default');
    dispatch(toggleTheme());
  };

  const handleHoverEnd = () => {
    controls.set(isDark ? 'rotate' : 'default');
  };

  return (
    <StyledThemeToggle
      variants={variants}
      animate={controls}
      whileHover={isDark ? 'hoverDark' : 'hover'}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faAdjust} />
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
