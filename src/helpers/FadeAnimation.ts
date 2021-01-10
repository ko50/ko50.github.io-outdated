import { keyframes } from 'styled-components'

export const FadeoutAnimation = keyframes`
  from {
    visibility: visible;
  }

  to {
    visibility: hidden;
  }
`;

export const FadeinAnimation = keyframes`
  from {
    visibility: visible;
  }

  to {
    visibility: visible;
  }
`;
