import React from 'react';
import styled from 'styled-components';
import { BaseColors } from '../../../data/Color';

const WelcomeText = styled.p`
  font-size: 1.3em;
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.2em;
  color: ${BaseColors.darkestpurple};
  border-bottom: 3px double #632A7E;
`;

export function HelloWorld() {
  return <WelcomeText>Hello World, My name is ko!</WelcomeText>;
}