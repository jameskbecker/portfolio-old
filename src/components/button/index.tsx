import styled from 'styled-components';
import { ButtonProps } from './types';

const StyledButton = styled.button`
  color: ${({ theme }: any) => theme.text};

  border: 1.5px solid ${({ theme }: any) => theme.text};
  /* border-radius: 0.25rem; */
  padding: 0.5rem 1rem;

  appearance: none;
  opacity: 0.9;
  cursor: pointer;

  :hover {
    background: ${({ theme }: any) => theme.text};
    color: #ffffff;

    opacity: 1;
    transition: 150ms ease-in-out;
  }
`;

const Button = ({ label }: ButtonProps) => <StyledButton>{label}</StyledButton>;

export default Button;
