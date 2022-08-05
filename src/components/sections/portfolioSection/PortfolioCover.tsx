import styled from 'styled-components';

const StyledPortfolioCover = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  h1 {
    text-transform: uppercase;
    text-align: center;
  }

  h4 {
    color: #4d4d4d;
  }
`;

const PortfolioCover = () => (
  <StyledPortfolioCover>
    <h1>My Portfolio</h1>
    <h4>
      I've completed many projects over the past few years. Here are the ones I
      am the proudest of!
    </h4>
  </StyledPortfolioCover>
);

export default PortfolioCover;
