import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    font: 500 1rem sans-serif;
    color: ${({ theme }: any) => theme.text};
    background: transparent;
   
    appearance: none;

    ::selection {
      background: ${({ theme }) => theme.brand};
      color: #FFFFFF;
    }
  }

  html {
    scroll-behavior: smooth;
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

  img, button {
    user-select: none;
  }
`;

export default GlobalStyles;
