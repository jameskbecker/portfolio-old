import styled from 'styled-components';

const GalleryNavButton = styled.div`
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
`;

export default GalleryNavButton;
