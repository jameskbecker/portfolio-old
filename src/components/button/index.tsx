import { ButtonText, StyledButton } from './styles';
import { ButtonProps } from './types';

const Button = ({ label, ...props }: ButtonProps) => (
  <StyledButton draggable="false" {...props}>
    <ButtonText>{label}</ButtonText>
  </StyledButton>
);

export default Button;
