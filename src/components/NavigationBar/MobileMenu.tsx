'use client';

import routes from '@/routes';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { mobileMenuVariants } from './animations';

const MobileMenu = (props: any) => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start(props.isOpen ? 'open' : 'close');
  }, [controls, props.isOpen]);

  const handleToggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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
      className="box-border flex flex-col items-center gap-8 overflow-hidden bg-background shadow-sm dark:bg-backgroundDark"
    >
      {routes.map(renderRoutes)}
      <a onClick={handleToggleTheme}>Toggle Theme</a>
    </motion.ul>
  );
};
export default MobileMenu;
