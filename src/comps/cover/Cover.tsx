import React from 'react';
import styled from 'styled-components';
import { BaseColors } from '../../data/Color';
import { Cotton } from './atom/Cotton';
import { Background } from '../common/Background';
import { HelloWorld } from './atom/HelloWorld';

export function Cover() {
  return (
    <Background>
      <Cotton />
      <HelloWorld />
    </Background>
  );
}