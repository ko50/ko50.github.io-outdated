import React from 'react';
import styled from 'styled-components';
import { BaseColors } from '../../data/Color';
import { HeaderBG } from './atom/HeaderBG';
import { Logo } from './atom/PortfolioLogo';

export function Header(): JSX.Element {
  return (
    <HeaderBG>
      <Logo />
    </HeaderBG>
  );
};