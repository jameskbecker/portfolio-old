import styled from 'styled-components';

export const StyledButton = styled.button`
  color: ${({ theme, ghost }: any) => (ghost ? theme.text : theme.background)};

  border: 1.5px solid ${({ theme }: any) => theme.text};
  border-radius: 0.5rem;
  background: ${({ theme, ghost }: any) =>
    ghost ? 'transparent' : theme.text};
  padding: 0.5rem 1rem;
  width: 100%;

  appearance: none;
  opacity: 0.9;
  cursor: pointer;

  :hover {
    background: ${({ theme }: any) => theme.text};
    color: ${({ theme }: any) => theme.background};

    opacity: 1;
    transition: 250ms ease-in-out;
  }
`;
