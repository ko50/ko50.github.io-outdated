import React from 'react';
import styled from 'styled-components';
import { BaseColors } from '../../../data/Color';

const BackCircle = styled.div`
  height: 33vmin;
  width: 33vmin;
  align-items: center;
  background: linear-gradient(-45deg, ${BaseColors.purple} 0%,  ${BaseColors.redishpurple} 100%);
  border-radius: 50%;
  box-shadow: 0 0px 5px 0 rgba(0, 0, 0, .5);
`;

const CircledImage = styled.img`
  height: 30vmin;
  pointer-events: none;
  margin: 0.25em;
  border: 0.25em solid white;
  border-radius: 50%;
`;

export function Cotton() {
  return (
    <BackCircle>
      <CircledImage src="cotton_circle.png" alt="logo" />
    </BackCircle>
  );
}