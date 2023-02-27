import { mobileMax, tabletMax } from '@/screens';
import styled from 'styled-components';

export const BodySmall = styled.div`
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 24px;
  color: ${({ theme }: any) => theme.text};

  @media only screen and (${mobileMax}) {
    font-size: 1rem;
  }
`;

export const Body = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  color: ${({ theme }: any) => theme.text};

  @media only screen and (${mobileMax}) {
    font-size: 1.25rem;
  }
`;

export const BodyLarge = styled.div`
  font-size: 6rem;

  font-weight: 300;
  text-transform: uppercase;
  color: ${({ theme }: any) => theme.text};

  @media only screen and (${tabletMax}) {
    font-size: 4rem;
  }

  @media only screen and (${mobileMax}) {
    font-size: 2rem;
  }
`;
