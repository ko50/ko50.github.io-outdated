import styled from 'styled-components';
import { BaseColors } from 'data/Color';

export const Background = styled.div`
  background: linear-gradient(white, ${BaseColors.whitishpink});
  min-height: 90vh;
  display: flex;
  width: 100%;
  border-bottom: 2px solid ${BaseColors.purple};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  box-shadow: 0 0px 5px 0 rgba(0, 0, 0, .5);

  @media screen and (max-width: 50em) {
    min-height: 75vh;
  }

  @media screen and (-webkit-min-device-pixel-ratio:0) {
    min-height: 60vh;

    @media screen and (max-width: 50em) {
      min-height: 40vh;
    }
  }
`;
