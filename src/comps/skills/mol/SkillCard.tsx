import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';
import { SkillData } from 'data/type/SkillData';

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

const FrameWorkList = styled.div`
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

export function SkillCard(props: SkillData): JSX.Element {
  const logoSrc: string = props.name + ".svg";

  return (
    <Root>
      <LangLogo src={logoSrc} />
      <SkillName>{props.name}</SkillName>
      <FrameWorkList>
        {props.frameworks.map((frameworkName) => (
          <FrameworkCard>{frameworkName}</FrameworkCard>
        ))}
      </FrameWorkList>
      <Mastery>
        {props.mastery}
      </Mastery>
      <Description>
        {props.description}
      </Description>
    </Root>
  );
}