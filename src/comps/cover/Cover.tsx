import React from 'react';
import { Cotton } from './mol/Cotton';
import { Background } from './mol/Background';
import { Welcome } from './mol/WelcomeText';
import { NotWelcome } from './mol/NotWelcomeText';

export function Cover() {
  return (
    <Background >
      <Cotton />
      <Welcome />
      <NotWelcome />
    </Background>
  );
}
