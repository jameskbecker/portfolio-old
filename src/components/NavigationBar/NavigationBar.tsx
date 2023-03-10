'use client';

import Bars from '@/assets/icons/bars.svg';
import NavigationMenu from '@/components/NavigationBar/NavigationMenu';
import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import { menuButtonVariants } from './animations';
import MobileMenu from './MobileMenu';

export type NavigationBarProps = {
  logoText: string;
};

const NavigationBar = ({ logoText }: NavigationBarProps) => {
  const controls = useAnimationControls();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    controls.set(!isOpen ? 'open' : 'close');
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-50 flex w-full flex-col">
      <div className="box-border flex h-16 flex-row items-center justify-evenly gap-8 bg-white bg-opacity-20 px-6 backdrop-blur">
        <div className="flex-1 text-base font-bold uppercase text-slate-700 dark:text-slate-300">
          {logoText}
        </div>
        <NavigationMenu />
        <motion.div
          initial="close"
          animate={controls}
          variants={menuButtonVariants}
          onClick={handleMenuClick}
        >
          <Bars className="fill-slate-700 dark:fill-slate-300 lg:hidden" />
        </motion.div>
      </div>
      <MobileMenu {...{ isOpen, setIsOpen }} />
    </nav>
  );
};

export default NavigationBar;
