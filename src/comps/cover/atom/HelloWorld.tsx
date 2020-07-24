import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';

const WelcomeText = styled.p`
  font-size: 1.3em;
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.2em;
  color: ${BaseColors.purpleblack};

  @media screen and (max-width: 50em) {
    font-size: 1.4em;
    margin: 0.5em;
  }
`;

export function HelloWorld() {
  return <WelcomeText>Hello World, My name is ko!</WelcomeText>;
}