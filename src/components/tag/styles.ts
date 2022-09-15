import styled from 'styled-components';

export const StyledTag = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 0.5px solid ${({ theme }) => theme.heading};
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;

  & > * {
    white-space: nowrap;
    text-wrap: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  overflow: hidden;
`;
