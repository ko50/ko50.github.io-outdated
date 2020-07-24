import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';

const Root = styled.div`
  margin: 0px;
  align-items: center;
`;

const FrameworkCard = styled.div`
  border-radius: 0.8em;
  display: inline-block;
  color: white;
  font-size: 0.5em;
  background: linear-gradient(-45deg, ${BaseColors.darkpurple} 0%,  ${BaseColors.purple} 100%);
  border: 1px solid black;
  box-shadow: 0 1.5px 2px 0 rgba(0, 0, 0, .5);
  box-shadow: 0 0px 1px 0 rgba(0, 0, 0, .5);
  margin: 1px 2.5px;
  padding: 2.5px 5px;
  font-weight: bold;

  @media screen and (max-width: 50em) {
    border-radius: 0.6em;
  }
`;

type FrameworksProps = {
  frameworks: string[];
}

export function FrameworkList(props: FrameworksProps) {
  return (
    <Root>
      {props.frameworks.map((frameworkName) =>
        <FrameworkCard>{frameworkName}</FrameworkCard>
      )}
    </Root>
  );
}