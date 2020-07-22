import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';
import { TopicTitle, StrongText } from '../common/Formatter';
import { SkillData } from 'data/type/SkillData';
import { SkillCard } from './mol/SkillCard';
import { SkillValues } from 'data/value/SkillValues';

const Root = styled.div`
  align-items: center;
`;

const SkillsList = styled.div`
  display: inline-block;
`;

export function Skills() {
  return (
    <Root>
      <TopicTitle>Skills</TopicTitle>
      <StrongText>怖い人が来ませんように…</StrongText>
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