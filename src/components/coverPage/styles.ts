import { mobileMax, tabletMax } from '@/screens';
import styled from 'styled-components';

export const StyledCoverPage = styled.div`
  flex: 0 0 100vh;
  display: flex;
  flex-direction: column;
  height: 100vh;

  margin: 0 clamp(32px, 12vw, 192px);

  @media only screen and (${tabletMax}) {
    margin: 0 32px;
  }
`;

export const HeadingContainer = styled.div`
  flex: 1 1;
  display: flex;
  align-items: flex-end;
`;

export const SubheadingContainer = styled.div`
  flex: 1 1;
`;
