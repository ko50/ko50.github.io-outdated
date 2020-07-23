import React from 'react';
import { HeaderBG } from './atom/HeaderBG';
import { Logo } from './atom/PortfolioLogo';

export function Header(): JSX.Element {
  return (
    <HeaderBG>
      <Logo />
    </HeaderBG>
  );
};