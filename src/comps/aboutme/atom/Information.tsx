import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';
import { AboutMeData } from 'data/type/AboutMeData';

const Root = styled.div`
  margin: 1em 2em;
  align-items: start;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 1.2em;
  text-align: start;
  margin-bottom: 2px;
  color: ${BaseColors.purpleblack};
`;

const Content = styled.p`
  font-size: 1em;
  text-align: start;
  margin: 2px;
  color: ${BaseColors.purpleblack};
`;

export function Information(props: AboutMeData) {
  return (
    <Root>
      <Title>{props.title}</Title>
      <Content>{props.content}</Content>
    </Root>
  );
}