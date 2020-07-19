import React from 'react';
import styled from 'styled-components';
import { BaseColors } from '../../data/Color';

const BackCircle = styled.div`
  height: 33vmin;
  width: 33vmin;
  background-color: #ffedfc;
  border-radius: 50%;
  align-items: center;
`;

const Cotton = styled.img`
  height: 30vmin;
  pointer-events: none;
  border: 0.5em double #ffb8f1;
  border-radius: 50%;
`;

const CoverRoot = styled.div`
  background: linear-gradient(#f9c7ff, #ffffff);
  min-height: 70vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const HelloWorld = styled.p`
  font-size: 1.3em;
  font-weight: bold;
  text-align: center;
  color: ${BaseColors.header};
`;

export function Cover() {
  return (
    <CoverRoot>
      <BackCircle>
        <Cotton />
      </BackCircle>
      <HelloWorld>Hello World, My name is ko!</HelloWorld>
    </CoverRoot>
  );
}