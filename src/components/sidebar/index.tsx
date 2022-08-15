import { AppDispatch } from '@/app/store';
import ThemeToggle from '@/features/themeToggle';
import routes from '@/routes';
import { useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button';
import { visibilityVariants } from './animations';
import { close } from './sidebarSlice';
import { SidebarLink, StyledNavigationMenu, StyledSidebar } from './styles';

const Sidebar = () => {
  const controls = useAnimationControls();
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen } = useSelector((state: any) => state.sidebar);

  useEffect(() => {
    console.log(isOpen);
    controls.start(isOpen ? 'open' : 'closed');
  }, [isOpen]);

  const handleClose = () => {
    controls.start('closed');
    dispatch(close());
  };

  return (
    <StyledSidebar
      initial={'closed'}
      animate={controls}
      variants={visibilityVariants}
    >
      <StyledNavigationMenu>
        {routes.map((route, i) => (
          <SidebarLink key={i} href={route.to}>
            {route.name}
          </SidebarLink>
        ))}
      </StyledNavigationMenu>
      <Button ghost label="Collapse" onClick={handleClose} />
    </StyledSidebar>
  );
};

export default Sidebar;
