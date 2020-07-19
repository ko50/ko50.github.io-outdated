import React from 'react';
import styled from 'styled-components';
import { BaseColors } from '../../data/Color';

const HeaderRoot = styled.header`
  position: sticky;
  background-color: ${BaseColors.header};
  height: 4em;
  width: 100%;
  text-align: left;
  float: left;
  color: ${BaseColors.text};
  border-bottom: 4px solid #D3B7D8;
`;

const Logo = styled.img`
  margin-left: 40px;
  margin-top: 0.6em;
  height: 3em;
`;

export function Header(): JSX.Element {
  return (
    <HeaderRoot>
      <Logo src="ko.png" alt="ko-Portfolio" />
    </HeaderRoot>
  );
};