import { mobileMax } from '@/screens';
import styled from 'styled-components';

export const StyledSkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const StyledSkillsContent = styled.div`
  flex: 0 0 calc(100vh - 200px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;

  margin: 96px clamp(32px, 12vw, 192px);
  box-sizing: border-box;
`;

export const ExpertiseContainer = styled.div`
  flex: 1 1 auto;
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

  @media only screen and (${mobileMax}) {
    display: none;
  }
`;

export const UpperText = styled.span`
  font-size: clamp(5rem, 10vw + 1rem, 10rem);
  font-weight: 500;
  padding: 0 64px;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  overflow: hidden;
`;

export const LowerText = styled.span`
  font-size: clamp(1.5rem, 10vw + 1rem, 2.5rem);
  padding: 0 64px;
  text-transform: none;
  color: ${({ theme }: any) => theme.subheading};
  overflow: hidden;
`;
