import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';
import { TopicTitle } from '../common/TopicTitle';
import { SkillData } from 'data/type/SkillData';
import { SkillCard } from './mol/SkillCard';
import { SkillValues } from 'data/value/SkillValues';

const Root = styled.div`

`;

const Excuse = styled.p`
  color: ${BaseColors.darkestpurple};
  font-size: 1em;
  font-weight: bold;
`;

const SkillsList = styled.div`
  float: top;
  display: inline-block;
  justify-content: space-evenly;
`;

export function Skills() {
  return (
    <Root>
      <TopicTitle topic="Skills" />
      <Excuse>怖い人が来ませんように…</Excuse>
      <SkillsList>
        {SkillValues.map((skill: SkillData) => (
          <SkillCard
            name={skill.name}
            mastery={skill.mastery}
            description={skill.description}
            frameworks={skill.frameworks} />
        ))}
      </SkillsList>
    </Root>
  );
}