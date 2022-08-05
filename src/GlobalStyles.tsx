import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    font: 500 1rem -apple-system, Inter, sans-serif;
    color: ${({ theme }: any) => theme.text};
    background: transparent;
   
    appearance: none;

    ::selection {
      background: ${({ theme }) => theme.brand};
      color: #FFFFFF;
    }
  }

  body {
    background: ${({ theme }: any) => theme.background};
  }

  h1 {
    font-size: 3rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
