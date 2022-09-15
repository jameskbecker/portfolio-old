import { BodySmall } from '@/components/typography/Body';
import { mobileMax, tabletMax } from '@/screens';
import Image from 'next/image';
import styled from 'styled-components';

export const StyledGallery = styled.div`
  flex: 0 0 100vh;
  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 64px);
  padding-top: 64px;

  @media only screen and (${tabletMax}) {
    text-align: center;
  }
`;

export const StyledGalleryCaption = styled.div`
  flex: 0 0 10rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: auto;
  gap: 24px;

  padding: 16px 0;
  margin: 0 200px;

  overflow: hidden;

  @media only screen and (${tabletMax}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledGalleryItem = styled.div`
  position: relative;
  /* grid-area: view; */
  flex: 1 1;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;

  width: 100%;

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

  overflow: hidden;

  @media only screen and (${tabletMax}) {
    width: 100%;
  }
`;

export const Description = styled(BodySmall)`
  flex: 0 1 70%;

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

export const StyledGalleryNavButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 4rem;
  height: 4rem;

  fill: ${({ theme }) => theme.text};
  border-radius: 50%;

  cursor: pointer;

  :hover {
    fill: ${({ theme }: any) => theme.brand};
    transition: 250ms ease-in-out;
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
