import { AppDispatch } from '@/app/store';
import NavigationMenu from '@/components/navigationBar/NavigationMenu';
import { useDispatch } from 'react-redux';
import { open } from '../sidebar/sidebarSlice';
import {
  StyledBars,
  StyledNavigationBar,
  StyledNavigationHeader,
} from './styles';

const NavigationBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const openSidebar = () => {
    dispatch(open());
  };
  return (
    <StyledNavigationBar>
      <StyledNavigationHeader>James K. Becker</StyledNavigationHeader>
      <NavigationMenu />
      <StyledBars />
    </StyledNavigationBar>
  );
};

export default NavigationBar;
