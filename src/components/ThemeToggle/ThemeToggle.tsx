'use client';

import MoonIcon from '@/assets/icons/moon.svg';
import SunIcon from '@/assets/icons/sun.svg';
import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleVariants } from './animations';

const ThemeToggle = () => {
  const controls = useAnimationControls();
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    controls.start(!isDark ? 'dark' : 'light');
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setIsDark(!isDark);
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
      role="button"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <SunIcon className="cursor-pointer stroke-neutral-700 text-lg hover:stroke-violet-500 hover:duration-300 hover:ease-in-out dark:stroke-neutral-300 dark:hover:stroke-violet-400" />
      ) : (
        <MoonIcon className="origin-center cursor-pointer stroke-neutral-700 text-lg hover:stroke-violet-500 hover:duration-300 hover:ease-in-out dark:stroke-neutral-300 dark:hover:stroke-violet-400" />
      )}
    </motion.div>
  );
};

export default ThemeToggle;
