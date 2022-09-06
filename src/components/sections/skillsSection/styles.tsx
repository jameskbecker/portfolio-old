import styled from 'styled-components';

export const StyledSkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 12vw;
  margin: 0;

  box-sizing: border-box;
`;

export const StyledSkillsContent = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;
  height: 100vh;

  width: 100%;
`;

export const ExpertiseContainer = styled.div`
  flex: 1 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  overflow: hidden;
`;

export const OtherSkillsContainer = styled.div`
  flex: 0 0 auto;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  overflow: hidden;
`;

export const UpperText = styled.span`
  font-size: clamp(5rem, 10vw + 1rem, 10rem);
  font-weight: 500;
  padding: 0 4rem;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  overflow: hidden;
`;

export const LowerText = styled.span`
  font-size: clamp(1.5rem, 10vw + 1rem, 2.5rem);
  padding: 0 4rem;
  text-transform: none;
  color: ${({ theme }: any) => theme.subheading};
  overflow: hidden;
`;
