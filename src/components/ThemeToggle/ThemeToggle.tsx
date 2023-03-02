import AdjustIcon from '@/assets/icons/adjust.svg';
import { motion, useAnimationControls } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { toggleVariants } from './animations';
import { toggleTheme } from './themeToggleSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const controls = useAnimationControls();
  const { isDark } = useSelector((state: any) => state.theme);

  const handleClick = () => {
    controls.start(!isDark ? 'dark' : 'light');
    dispatch(toggleTheme());
  };

  const handleHover = () => {
    controls.start(isDark ? 'hoverDark' : 'hover');
  };

  const handleHoverEnd = () => {
    controls.start(isDark ? 'dark' : 'light');
  };

  return (
    <motion.div
      initial="light"
      animate={controls}
      variants={toggleVariants}
      onHoverStart={handleHover}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
    >
      <AdjustIcon className="origin-center cursor-pointer fill-navigationText hover:fill-brand hover:duration-300 hover:ease-in-out dark:hover:fill-brandDark" />
    </motion.div>
  );
};

export default ThemeToggle;
