import styled from 'styled-components';

const StyledPortfolioSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;

  padding: 1.5rem 12rem;

  h1 {
    text-transform: uppercase;
    text-align: center;
  }
`;

const PortfolioSection = () => (
  <StyledPortfolioSection>
    <h1>My Portfolio</h1>
  </StyledPortfolioSection>
);

export default PortfolioSection;
