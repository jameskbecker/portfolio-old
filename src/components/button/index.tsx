import { StyledButton } from './styles';
import { ButtonProps } from './types';

const Button = ({ label, ...props }: ButtonProps) => (
  <StyledButton draggable="false" {...props}>
    {label}
  </StyledButton>
);

export default Button;
