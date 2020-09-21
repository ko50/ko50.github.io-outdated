import React from 'react';
import styled from 'styled-components';
import { TopicTitle, StrongText } from '../common/Formatter';
import { SkillData } from 'data/type/SkillData';
import { SkillInfo } from './mol/SkillInfo';
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
      <TopicTitle>Language Skills</TopicTitle>
      <StrongText>ちょっとだけ書ける言語</StrongText>
      <SkillsList>
        {SkillValues.map((skill: SkillData) => (
          <SkillInfo
            name={skill.name}
            mastery={skill.mastery}
            description={skill.description}
            frameworks={skill.frameworks} />
        ))}
      </SkillsList>
    </Root>
  );
}