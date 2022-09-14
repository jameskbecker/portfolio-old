import { BodySmall } from '../typography/Body';
import { StyledTag } from './styles';

const Tag = ({ label }) => (
  <StyledTag>
    <BodySmall>{label}</BodySmall>
  </StyledTag>
);

export default Tag;
