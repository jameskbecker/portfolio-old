import { AppDispatch } from '@/app/store';
import NavigationMenu from '@/components/navigationBar/NavigationMenu';
import { motion, useAnimationControls } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { menuButtonVariants } from './animations';
import MobileMenu from './MobileMenu';
import { toggleMenu } from './navigationSlice';
import {
  NavigationContainer,
  StyledBars,
  StyledNavigationBar,
  StyledNavigationHeader,
} from './styles';
import { NavigationBarProps } from './types';

const NavigationBar = ({ logoText }: NavigationBarProps) => {
  const controls = useAnimationControls();
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen } = useSelector((state: any) => state.navigation);

  const handleMenuClick = () => {
    dispatch(toggleMenu());
    controls.set(!isOpen ? 'open' : 'close');
  };

  return (
    <NavigationContainer>
      <StyledNavigationBar>
        <StyledNavigationHeader>{logoText}</StyledNavigationHeader>
        <NavigationMenu />
        <motion.div
          initial="close"
          animate={controls}
          variants={menuButtonVariants}
          onClick={handleMenuClick}
        >
          <StyledBars />
        </motion.div>
      </StyledNavigationBar>
      <MobileMenu></MobileMenu>
    </NavigationContainer>
  );
};

export default NavigationBar;
