import screens from '@/screens';
import Image from 'next/image';
import styled from 'styled-components';

export const StyledGallery = styled.div`
  flex: 1 1;
  display: grid;
  grid-template-areas:
    'prev view next'
    'prev view next'
    '. details .';
  grid-auto-columns: 4rem auto 4rem;
  grid-auto-rows: auto;
  justify-content: center;
  align-items: center;
  grid-gap: 0 1rem;

  @media only screen and (max-width: ${screens.tabletMax}) {
    grid-template-areas:
      'details details details'
      'view view view'
      'prev . next';

    grid-template-rows: 1fr 4fr 2fr;
    grid-gap: 0;
  }
`;

export const StyledGalleryFooter = styled.div`
  flex-basis: 15vh;
  grid-area: details;
  width: 100%;

  display: grid;
  grid-template-columns: 3fr 6fr;
  grid-auto-rows: min-content min-content;
  grid-auto-flow: column;
  grid-gap: 0 1.5rem;
  align-self: center;

  padding: 1rem 0;
  margin: 0;

  overflow: hidden;

  @media only screen and (max-width: ${screens.tabletMax}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledGalleryItem = styled.div`
  position: relative;
  grid-area: view;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100%;

  box-sizing: border-box;
  overflow: hidden;

  @media only screen and (max-width: ${screens.mobileMax}) {
    align-items: flex-end;
  }
`;

export const StyledGalleryImage = styled.div`
  position: relative;
  flex: 1 1;
  height: 100%;
  width: auto;

  border-radius: 0.75rem;
  overflow: hidden;

  @media only screen and (max-width: ${screens.tabletMax}) {
    width: 100%;
  }
`;

export const Heading = styled.h5`
  font-weight: 600;
  text-transform: uppercase;
`;

export const Subheading = styled.h6`
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-weight: 300;
  grid-row: span 3;

  @media only screen and (max-width: ${screens.tabletMax}) {
    display: none;
  }
`;

export const StyledGalleryBackdrop = styled(Image)`
  position: absolute;
  top: 0;
  width: 100%;

  filter: blur(5px);
  object-fit: cover;
  object-position: top;
  overflow: hidden;
  z-index: -1;

  @media only screen and (max-width: ${screens.mobileMax}) {
    display: none;
  }
`;

export const StyledGalleryNavButton = styled.div<any>`
  grid-area: ${({ prev }: any) => (prev ? 'prev' : 'next')};
  grid-row: span 3;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 4rem;
  height: 4rem;

  border-radius: 50%;

  cursor: pointer;

  :hover {
    background: ${({ theme }: any) => theme.brand};
    color: #ffffff;
    transition: 250ms ease-in-out;
  }

  @media only screen and (max-width: ${screens.mobileMax}) {
    background: ${({ theme }: any) => theme.brand};
    color: #ffffff;
    transition: 250ms ease-in-out;
  }
`;
