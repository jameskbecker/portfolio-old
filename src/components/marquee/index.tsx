import {
  scrollAnimation,
  scrollReverseAnimation,
} from '@/components/marquee/animations';
import { ReactNode } from 'react';
import styled from 'styled-components';

type StyledMarqueeProps = {
  reverse?: boolean;
};

type MarqueeProps = {
  children: ReactNode;
  reverse?: boolean;
};

const StyledMarquee = styled.div<StyledMarqueeProps>`
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

const Marquee = ({ children, ...props }: MarqueeProps) => {
  return (
    <StyledMarquee {...props}>
      <div>
        {children}
        {children}
      </div>
    </StyledMarquee>
  );
};

export default Marquee;
