import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledSidebar = styled(motion.aside)`
  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  height: 100vh;
  width: 95vh;
  max-width: 350px;

  background: ${({ theme }) => theme.background};
  padding: 0.5rem;
  border-left: 1px solid ${({ theme }) => theme.text};
  box-sizing: border-box;

  z-index: 1000;
`;

export const StyledNavigationMenu = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const SidebarLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  box-sizing: border-box;
`;
