import { createGlobalStyle } from 'styled-components';
import screens from './screens';

const GlobalStyles = createGlobalStyle`
  * {
    font: 500 1rem -apple-system, sans-serif;
    margin: 0;
    padding: 0;
   
    appearance: none;
    scroll-behavior: smooth;

    ::selection {
      background: ${({ theme }) => theme.brand};
      color: #FFFFFF;
    }

    :focus {
      outline: 1.5px solid ${({ theme }: any) => theme.brand};
    }
  }

  body {
    background: ${({ theme }: any) => theme.background};
  }

  section {
    overflow: hidden;
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
