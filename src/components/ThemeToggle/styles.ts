import AdjustIcon from '@/assets/icons/adjust.svg';
import styled from 'styled-components';

export const StyledAdjustIcon = styled(AdjustIcon)`
  cursor: pointer;
  transform-origin: center;

  fill: ${({ theme }: any) => theme.navigationText};

  :hover {
    fill: ${({ theme }: any) => theme.brand};
  }
`;
