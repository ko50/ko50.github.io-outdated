import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
  margin-left: 40px;
  margin-top: 0.6em;
  height: 3em;
`;

export function Logo() {
  return <LogoImage src="ko.png" alt="ko-Portfolio" />
}