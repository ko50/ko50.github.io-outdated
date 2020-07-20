import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';
import { TopicData } from "data/type/TopicData";

const TitleText = styled.p`
  color: ${BaseColors.darkestpurple};
  font-weight: bold;
  padding-bottom: 0.1em;
  margin-bottom: 0px;
  display: inline-block;
  font-size: 3em;
  border-bottom: 2px solid ${BaseColors.darkestpurple};
`;

export function TopicTitle(props: TopicData): JSX.Element {
  return <TitleText>{props.topic}</TitleText>;
}