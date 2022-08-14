import { ReactNode } from 'react';

export type StyledMarqueeProps = {
  reverse?: boolean;
};

export type MarqueeProps = {
  children: ReactNode;
  reverse?: boolean;
};
