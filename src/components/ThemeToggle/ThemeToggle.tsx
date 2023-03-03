'use client';

import AdjustIcon from '@/assets/icons/adjust.svg';
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
    >
      <AdjustIcon className="origin-center cursor-pointer fill-gray-700 hover:fill-brand hover:duration-300 hover:ease-in-out dark:fill-gray-300 dark:hover:fill-brandDark" />
    </motion.div>
  );
};

export default ThemeToggle;
