import screens from '@/screens';
import styled from 'styled-components';

const StyledPortfolioCover = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  height: 50%;
`;

const PortfolioCover = () => (
  <StyledPortfolioCover>
    <h1>My Portfolio</h1>
    <h3>
      I&apos;ve completed many projects throughout my journey so far. Here are
      the ones I am the proudest of!
    </h3>
  </StyledPortfolioCover>
);

export default PortfolioCover;
