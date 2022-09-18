import { tabletMax } from '@/screens';
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

  @media only screen and (${tabletMax}) {
    display: none;
  }
`;
