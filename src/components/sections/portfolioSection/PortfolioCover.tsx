import styled from 'styled-components';

const StyledPortfolioCover = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  padding: 0 5vw;

  h1 {
    font-size: 10vw;
    text-transform: uppercase;
    text-align: center;
  }

  h4 {
    font-size: 5vw;
    color: ${({ theme }: any) => theme.subheading};
    text-align: center;
  }
`;

const PortfolioCover = () => (
  <StyledPortfolioCover>
    <h1>My Portfolio</h1>
    <h4>
      I&apos;ve completed many projects over the past few years. Here are the
      ones I am the proudest of!
    </h4>
  </StyledPortfolioCover>
);

export default PortfolioCover;
