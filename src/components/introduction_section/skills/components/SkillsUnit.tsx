import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { SkillData, SkillCategory } from 'data/type/SkillData'
import { SkillCard } from 'components/introduction_section/skills/components/SkillCard'

const Container = styled.div`
  height: fit-content;
  width: 30%;
`;

const Title = styled.div`
  height: fit-content;
  padding: 0 8px;
  margin: 1em 0;
  border-right: 2px solid ${BaseColors.darkPurple};
  border-left: 2px solid ${BaseColors.darkPurple};
`;

type Props = {
  category: SkillCategory,
  skills: SkillData[],
};

export const SkillsUnit = (props: Props) => {
  return (
    <Container>
      <Title>{props.category}</Title>
      {props.skills.map((skill) => <SkillCard data={skill} />)}
    </Container>
  );
};
