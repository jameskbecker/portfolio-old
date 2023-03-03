import { AppDispatch } from '@/app/store';
import Bars from '@/assets/icons/bars.svg';
import NavigationMenu from '@/components/NavigationBar/NavigationMenu';
import { motion, useAnimationControls } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { menuButtonVariants } from './animations';
import MobileMenu from './MobileMenu';
import { toggleMenu } from './navigationSlice';

export type NavigationBarProps = {
  logoText: string;
};

const NavigationBar = ({ logoText }: NavigationBarProps) => {
  const controls = useAnimationControls();
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen } = useSelector((state: any) => state.navigation);

  const handleMenuClick = () => {
    dispatch(toggleMenu());
    controls.set(!isOpen ? 'open' : 'close');
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
          <Bars className="fill-navigationText lg:hidden" />
        </motion.div>
      </div>
      <MobileMenu />
    </nav>
  );
};

export default NavigationBar;
