import { mobileMax, tabletMax } from '@/screens';
import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }: any) => theme.heading};

  @media only screen and (${tabletMax}) {
    font-size: 3rem;
  }
`;

export const H2 = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.heading};

  @media only screen and (${mobileMax}) {
    font-size: 2.5rem;
  }
`;

export const H3 = styled.h3`
  font-size: 2.25rem;
  font-weight: 300;
  color: ${({ theme }: any) => theme.text};

  @media only screen and (${mobileMax}) {
    font-size: 2rem;
  }
`;

export const H4 = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }: any) => theme.heading};

  @media only screen and (${mobileMax}) {
    font-size: 1.125rem;
  }
`;

export const H5 = styled.h5`
  font-size: 1.125rem;
  font-weight: 400;
  color: ${({ theme }: any) => theme.subheading};

  @media only screen and (${mobileMax}) {
    font-size: 1rem;
  }
`;
