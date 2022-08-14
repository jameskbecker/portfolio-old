import styled from 'styled-components';

export const StyledExpertiseContent = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin: 0 12rem;
  overflow: hidden;

  & > h1 {
    padding: 2rem 0;
  }
`;

export const StyledExpertiseSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 6vw 12vw;
  border-bottom: 1px solid ${({ theme }: any) => theme.text};
  box-sizing: border-box;

  overflow: hidden;
`;

export const UpperText = styled.span`
  font-size: 10vw;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
`;

export const LowerText = styled.span`
  font-size: 3vw;
  text-transform: none;
  color: ${({ theme }: any) => theme.subheading};
`;
