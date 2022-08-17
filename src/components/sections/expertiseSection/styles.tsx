import styled from 'styled-components';

export const StyledExpertiseSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  padding: 6vw 0;
  margin: 0;

  box-sizing: border-box;

  overflow: hidden;
`;

export const StyledExpertiseContent = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  overflow: hidden !important;
  width: 100%;
`;

export const UpperText = styled.span`
  font-size: 10vw;
  font-weight: 500;
  padding: 0 4rem;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  overflow: hidden;
`;

export const LowerText = styled.span`
  font-size: 3vw;
  padding: 0 4rem;
  text-transform: none;
  color: ${({ theme }: any) => theme.subheading};
  overflow: hidden;
`;
