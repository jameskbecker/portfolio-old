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

  /* h1, h2, h3, h4, h5, h6 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  } */

  h1 {
    font-size: clamp(2rem, 6vw + 1rem, 3rem);
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme }: any) => theme.heading};
  }

  h2 {
    font-size: clamp(3rem, 3vw + 1rem, 6rem);
    font-weight: 600;
    color: ${({ theme }) => theme.text};
  }

  h3 {
    font-size: clamp(1.25rem, 2vw + 1rem, 1.5rem);
    font-weight: 300;
    color: ${({ theme }: any) => theme.text};
    text-align: left;
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
