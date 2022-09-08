import { AppDispatch } from '@/app/store';
import NavigationMenu from '@/components/navigationBar/NavigationMenu';
import { useDispatch } from 'react-redux';
import {
  StyledBars,
  StyledNavigationBar,
  StyledNavigationHeader,
} from './styles';
import { NavigationBarProps } from './types';

const NavigationBar = ({ logoText }: NavigationBarProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <StyledNavigationBar>
      <StyledNavigationHeader>{logoText}</StyledNavigationHeader>
      <NavigationMenu />
      <StyledBars />
    </StyledNavigationBar>
  );
};

export default NavigationBar;
