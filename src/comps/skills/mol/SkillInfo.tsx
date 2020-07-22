import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';
import { SkillData } from 'data/type/SkillData';
import { FrameworkList } from '../atom/FrameworkList';

const Root = styled.div`
  height: 15em;
  width: 20em;
  margin: 2em;
  background-color: white;
  align-items: center;
  text-align: center;
  display: inline-block;
  vertical-align: top;
`;

const LangLogo = styled.img`
  height: 30px;
  max-width: 50px;
`;

const SkillName = styled.p`
  margin-top: 5px;
  font-size: 1em;
  font-weight: bold;
  color: black;
`;

const Mastery = styled.p`
  font-size: 0.7em;
  color: ${BaseColors.purple};
  font-weight: bold;
`;

const Description = styled.p`
  width: 15em;
  text-align: left;
  display: inline-block;
  color: ${BaseColors.purpleblack};
`;

export function SkillInfo(props: SkillData): JSX.Element {
  const logoSrc: string = props.name + ".svg";

  return (
    <Root>
      <LangLogo src={logoSrc} />
      <SkillName>{props.name}</SkillName>
      <FrameworkList frameworks={props.frameworks} />
      <Mastery>{props.mastery}</Mastery>
      <Description>{props.description}</Description>
    </Root>
  );
}