import styled from 'styled-components';
import { scrollAnimation, scrollReverseAnimation } from './animations';
import { StyledMarqueeProps } from './types';

export const StyledMarquee = styled.div<StyledMarqueeProps>`
  overflow: hidden;
  white-space: nowrap;

  & > div {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;

    animation: ${({ reverse }) =>
        reverse ? scrollReverseAnimation : scrollAnimation}
      60s linear infinite;
  }
`;
