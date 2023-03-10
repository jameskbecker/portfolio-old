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
      className="text-slate-800 opacity-60 hover:opacity-100 hover:duration-300 hover:ease-in dark:text-zinc-300"
    >
      {route.name}
    </a>
  );

  return (
    <motion.ul
      initial="close"
      animate={controls}
      variants={mobileMenuVariants}
      className="box-border flex flex-col items-center gap-8 overflow-hidden bg-slate-100 shadow-sm dark:bg-slate-900 lg:hidden"
    >
      {routes.map(renderRoutes)}
      <div
        role="button"
        onClick={handleToggleTheme}
        className="text-slate-800 opacity-60 hover:opacity-100 hover:duration-300 hover:ease-in dark:text-zinc-300"
      >
        Toggle Theme
      </div>
    </motion.ul>
  );
};
export default MobileMenu;
