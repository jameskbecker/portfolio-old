import { AppDispatch } from '@/app/store';
import { toggleTheme } from '@/components/ThemeToggle/themeToggleSlice';
import routes from '@/routes';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mobileMenuVariants } from './animations';

const MobileMenu = () => {
  const controls = useAnimationControls();
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen } = useSelector((state: any) => state.navigation);

  useEffect(() => {
    controls.start(isOpen ? 'open' : 'close');
  }, [controls, isOpen]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const renderRoutes = (route: any, i: number) => (
    <a
      key={i}
      href={route.to}
      className="text-navigationText opacity-60 hover:opacity-100 hover:duration-300 hover:ease-in"
    >
      {route.name}
    </a>
  );

  return (
    <motion.ul
      initial="close"
      animate={controls}
      variants={mobileMenuVariants}
      className="box-border flex flex-col items-center gap-8 overflow-hidden bg-background shadow-sm"
    >
      {routes.map(renderRoutes)}
      <a onClick={handleToggleTheme}>Toggle Theme</a>
    </motion.ul>
  );
};
export default MobileMenu;
