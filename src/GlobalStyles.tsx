import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: -apple-system, sans-serif;
    margin: 0;
    padding: 0;
   
    appearance: none;
    scroll-behavior: smooth;

    ::selection {
      background: ${({ theme }) => theme.brand};
      color: ${({ theme }) => theme.brandText};
    }

    :focus {
      outline: 1.5px solid ${({ theme }: any) => theme.brand};
    }
  }

  body {
    background: ${({ theme }: any) => theme.background};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};

    cursor: pointer;
  }

  img, button {
    user-select: none;
  }
`;

export default GlobalStyles;
