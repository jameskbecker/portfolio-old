import { BodySmall } from '@/components/typography/Body';
import { mobileMax, tabletMax } from '@/screens';
import Image from 'next/image';
import styled from 'styled-components';

export const StyledGallery = styled.div`
  flex: 0 0 100%;
  display: grid;
  grid-template-areas:
    'prev view next'
    'prev view next'
    'prev details next';

  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: 4fr 4fr 2fr;
  grid-gap: 0.5rem;
  max-height: 100vh;

  @media only screen and (${tabletMax}) {
    grid-template-areas:
      'view view view'
      'view view view'
      'prev details  next';

    grid-template-rows: 1fr 4fr 2fr;
    text-align: center;
  }
`;

export const StyledGalleryFooter = styled.div`
  grid-area: details;

  display: grid;
  grid-template-columns: 3fr 6fr;
  grid-auto-rows: min-content min-content;
  grid-auto-flow: column;
  grid-gap: 0 1.5rem;
  overflow: auto;

  padding: 1rem 0;
  margin: 0;

  overflow: hidden;

  @media only screen and (${tabletMax}) {
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

  @media only screen and (${mobileMax}) {
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

  @media only screen and (${tabletMax}) {
    width: 100%;
  }
`;

export const Description = styled(BodySmall)`
  grid-row: span 3;

  @media only screen and (${tabletMax}) {
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

  @media only screen and (${mobileMax}) {
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

  color: ${({ theme }) => theme.text};
  border-radius: 50%;

  cursor: pointer;

  :hover {
    background: ${({ theme }: any) => theme.brand};
    color: #ffffff;
    transition: 250ms ease-in-out;
  }

  @media only screen and (${mobileMax}) {
    /* background: ${({ theme }: any) => theme.brand};
    color: #ffffff;
    transition: 250ms ease-in-out; */
  }
`;

export const PrevContainer = styled.div`
  display: flex;
  flex-dirction: row;
  justify-content: center;
  align-items: center;
  grid-area: prev;
`;

export const NextContainer = styled.div`
  display: flex;
  flex-dirction: row;
  justify-content: center;
  align-items: center;
  grid-area: next;
`;
