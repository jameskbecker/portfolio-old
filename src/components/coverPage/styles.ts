import styled from 'styled-components';

export const StyledCoverPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex: 0 0 100vh;
  margin: 0 clamp(32px, 12vw, 192px);

  h1,
  h3 {
    flex: 1 1;
  }

  h1 {
    display: flex;
    align-items: flex-end;
  }
`;
