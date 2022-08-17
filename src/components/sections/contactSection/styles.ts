import screens from '@/screens';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  padding: 12vw 0;

  border-top: 1px solid ${({ theme }: any) => theme.text};
  box-sizing: border-box;

  overflow: hidden;
`;

export const StyledContactContent = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3vw;

  margin: auto;

  @media only screen and (max-width: ${screens.tabletMax}) {
    flex-direction: column;
    gap: 4vh;
  }
`;

export const ContactIcon = styled(motion(FontAwesomeIcon))`
  font-size: max(4rem, 3vw);
  margin: auto;
`;
