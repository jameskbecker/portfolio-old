'use client';

import Bars from '@/assets/icons/bars.svg';
import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import { menuButtonVariants } from './animations';

const NavMenuButton = () => {
  const controls = useAnimationControls();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    controls.set(!isOpen ? 'open' : 'close');
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial="close"
      animate={controls}
      variants={menuButtonVariants}
      onClick={handleMenuClick}
      role="button"
      aria-label="Open Navigation Menu"
    >
      <Bars className="fill-slate-700 dark:fill-slate-300 lg:hidden" />
    </motion.div>
  );
};

export default NavMenuButton;
