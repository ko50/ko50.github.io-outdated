import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { SkillData, SkillCategory } from 'data/type/SkillData'
import { SkillCard } from 'components/introduction_section/skills/components/SkillCard'

const Container = styled.div`
  height: fit-content;
  width: 28%;
  align-items: center;
`;

const Title = styled.div`
  height: fit-content;
  width: fit-content;
  text-align: center;
  font-size: 1.5em;
  padding: 0 1em;
  margin: 1em auto;
  font-weight: 700;
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
