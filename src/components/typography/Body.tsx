import screens from '@/screens';
import styled from 'styled-components';

export const BodySmall = styled.div`
  font-size: 1.125rem;
  color: ${({ theme }: any) => theme.text};

  @media only screen and (max-width: ${screens.mobileMax}) {
    font-size: 1rem;
  }
`;

export const Body = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }: any) => theme.text};

  @media only screen and (max-width: ${screens.mobileMax}) {
    font-size: 1.25rem;
  }
`;
