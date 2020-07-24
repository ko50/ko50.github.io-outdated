import React from 'react';
import { Cotton } from './atom/Cotton';
import { Background } from './atom/Background';
import { HelloWorld } from './atom/HelloWorld';

export function Cover() {
  return (
    <Background>
      <Cotton />
      <HelloWorld />
    </Background>
  );
}
