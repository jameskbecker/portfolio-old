import { createGlobalStyle } from 'styled-components';
import lightTheme from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    font: 500 1rem -apple-system, Inter, sans-serif;
   
    appearance: none;
  }

  body {
    background: ${lightTheme.background};
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
