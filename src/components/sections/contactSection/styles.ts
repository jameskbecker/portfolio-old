import screens from '@/screens';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  padding: 12vw 6vw;
  margin: 0 auto;
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

export const ContactIcon = styled(FontAwesomeIcon)`
  font-size: max(4rem, 3vw);
  margin: auto;

  opacity: 0.8;

  * {
    color: ${({ theme }: any) => theme.text};
  }

  :hover {
    opacity: 1;
    transition: 250ms ease-in-out;

    * {
      color: ${({ theme }: any) => theme.brand};
      transition: 250ms ease-in-out;
    }
  }
`;
