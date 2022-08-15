import { AppDispatch } from '@/app/store';
import NavigationMenu from '@/components/navigationBar/NavigationMenu';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { open } from '../sidebar/sidebarSlice';
import {
  StyledIcon,
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
      <StyledIcon icon={faBars} onClick={openSidebar} />
    </StyledNavigationBar>
  );
};

export default NavigationBar;
