import styled from 'styled-components';
import { BaseColors } from 'data/Color';

export const InfoList = styled.div`
  margin-top: 3em;
  padding: 0 2em;
  border-top: 1px solid ${BaseColors.purpleblack};
  border-right: 2px solid ${BaseColors.purpleblack};
  border-bottom: 2px solid ${BaseColors.purpleblack};
  border-left: 1px solid ${BaseColors.purpleblack};
  border-radius: 2em;

  @media screen and (max-width: 50em) {
    margin-top: 1em;
    border: none;
  }
`;
