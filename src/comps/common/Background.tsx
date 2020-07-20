import React from 'react';
import styled from 'styled-components';
import { BaseColors } from '../../data/Color';

export const Background = styled.div`
  background: linear-gradient(white, ${BaseColors.whitishpink});
  min-height: 60vh;
  display: flex;
  width: 100%;
  border-bottom: 2px solid ${BaseColors.purple};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  box-shadow: 0 0px 5px 0 rgba(0, 0, 0, .5);
`;
