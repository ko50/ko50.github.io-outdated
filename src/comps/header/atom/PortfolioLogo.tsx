import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
  margin-left: 2em;
  margin-top: 0.6em;
  height: 3em;

  @media screen and (max-width: 50em) {
    height: 2em;
    margin-left: 1.2em;
  }
`;

export function Logo() {
  return <LogoImage src="ko.png" alt="ko-Portfolio" />
}