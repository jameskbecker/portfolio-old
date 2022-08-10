import { createGlobalStyle } from 'styled-components';
import screens from './screens';

const GlobalStyles = createGlobalStyle`
  * {
    font: 500 1rem sans-serif;
    color: ${({ theme }: any) => theme.text};
    margin: 0;
    padding: 0;
   
    appearance: none;
    scroll-behavior: smooth;

    ::selection {
      background: ${({ theme }) => theme.brand};
      color: #FFFFFF;
    }
  }

  body {
    background: ${({ theme }: any) => theme.background};
  }

  section {
    overflow: hidden;
  }

  h1 {
    font-size: 8vw;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme }: any) => theme.heading};
  }

  h2 {
    font-size: 3rem;
    font-weight: 600;
  }

  h3 {
    font-size: min-max(1.5rem, 3vw);
    font-weight: 300;
    color: ${({ theme }: any) => theme.text};
    text-align: left;
  }

  

  a {
    text-decoration: none;
    color: inherit;

    cursor: pointer;
  }

  img, button {
    user-select: none;
  }

 @media only screen and (max-width: ${screens.tabletMax}) {
  h2 {
    font-size: 2.5rem;
  }

  h3 {
      font-size: 1.25rem;
    }

 }
`;

export default GlobalStyles;
