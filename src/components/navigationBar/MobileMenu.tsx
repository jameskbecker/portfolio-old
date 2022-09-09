import { AppDispatch } from '@/app/store';
import { toggleTheme } from '@/features/themeToggle/themeToggleSlice';
import routes from '@/routes';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mobileMenuVariants } from './animations';
import { NavigationLink, StyledMobileMenu } from './styles';

const MobileMenu = () => {
  const controls = useAnimationControls();
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen } = useSelector((state: any) => state.navigation);

  useEffect(() => {
    console.log('IS OPEN', isOpen);
    controls.start(isOpen ? 'open' : 'close');
  }, [isOpen]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <StyledMobileMenu
      as={motion.div}
      initial="close"
      animate={controls}
      variants={mobileMenuVariants}
    >
      {routes.map((route, i) => (
        <NavigationLink key={i} href={route.to}>
          {route.name}
        </NavigationLink>
      ))}
      <a onClick={handleToggleTheme}>Toggle Theme</a>
    </StyledMobileMenu>
  );
};
export default MobileMenu;
