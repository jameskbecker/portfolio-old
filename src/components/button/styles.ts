import styled from 'styled-components';

export const StyledButton = styled.button`
  color: ${({ theme, ghost }: any) => (ghost ? theme.text : theme.brandText)};

  border: 1.5px solid ${({ theme }: any) => theme.brand};
  border-radius: 0.5rem;
  background: ${({ theme, ghost }: any) =>
    ghost ? 'transparent' : theme.brand};
  padding: 0.5rem 1rem;
  width: 100%;

  appearance: none;
  opacity: 0.9;
  cursor: pointer;

  :hover {
    opacity: 1;
    transition: 250ms ease-in-out;
  }
`;
