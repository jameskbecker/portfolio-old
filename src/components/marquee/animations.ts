import { keyframes } from 'styled-components';

const scrollAnimation = keyframes`
  0% {
    transform: translate(50%, 0);
  }

  100% {
    transform: translate(-50%, 0)
  }
`;

const scrollReverseAnimation = keyframes`
  0% {
    transform: translate(-50%, 0);
  }

  100% {
    transform: translate(50%, 0)
  }
`;

export { scrollAnimation, scrollReverseAnimation };
