import { toggleTheme } from '@/features/themeToggle/themeToggleSlice';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state: any) => state.theme);

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <div onClick={handleClick}>
      <FontAwesomeIcon icon={!isDark ? faSun : faMoon} />
    </div>
  );
};

export default ThemeToggle;
