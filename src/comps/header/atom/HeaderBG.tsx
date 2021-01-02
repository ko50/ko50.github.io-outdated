import styled from 'styled-components';
import { BaseColors } from 'data/Color';

export const HeaderBG = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${BaseColors.darkpurple};
  height: 4em;
  width: 100%;
  text-align: left;
  float: left;
  color: ${BaseColors.purple};
  border-bottom: 4px solid #D3B7D8;
  box-shadow: 0 0px 5px 0 rgba(0, 0, 0, .5);

  @media screen and (max-width: 50em) {
    height: 3em;
    border-bottom: 2.5px solid #D3B7D8;
  }
`;
