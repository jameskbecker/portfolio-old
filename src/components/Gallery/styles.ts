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

export const StyledGalleryDetails = styled.div`
  flex: 0 0 10rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: auto;
  gap: 24px;
  justify-content: spread-evenly;
  padding: 16px 0;
  margin: 0 clamp(32px, 12vw, 192px);

  overflow: hidden;
`;

export const Description = styled(BodySmall)`
  flex: 0 1 70%;

  @media only screen and (${tabletMax}) {
    display: none;
    flex: 0 0;
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
`;

export const NextContainer = styled.div`
  display: flex;
  flex-dirction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledGalleryView = styled.div`
  position: relative;
  flex: 1 1;
  height: 100%;
  width: auto;
  background: black;
  overflow: hidden;

  @media only screen and (${tabletMax}) {
    width: 100%;
  }
`;

export const MainImage = styled(Image)`
  position: absolute;
  z-index: 2;
`;

export const BlurredImage = styled(Image)`
  position: absolute;
  width: 100%;
  z-index: 1;

  filter: blur(5px);
  opacity: 0.6;
`;

export const StyledHeader = styled.div`
  flex: 0 1 30%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  overflow: hidden;
  flex-wrap: wrap;

  @media screen and (${tabletMax}) {
    flex: 1 1;
    align-items: center;

    & > * {
      justify-content: center;
      margin: 0 auto;
      max-width: 100%;
    }
  }
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;

  @media only screen and (${mobileMax}) {
    display: none;
  }
`;
