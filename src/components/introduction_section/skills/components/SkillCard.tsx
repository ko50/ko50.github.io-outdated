import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { SkillData, SkillCategory } from 'data/type/SkillData'

const Background = styled.div`
  height: fit-content;
  width: 100%;
  padding: 1em 2em;
  align-items: center;
  box-shadow: 0 0 5px 0 ${BaseColors.shadow};
`;

const Icon = styled.img`
  height: 2em;
  width: 2em;
`;

const SkillName = styled.div`
  font-size: 2em;
  color: ${BaseColors.grey};
  margin-bottom: 0.5em;
`;

type Props = { data: SkillData };

export const SkillCard = (props: Props) => {
  return (
    <Background>
      <Icon src={props.data.iconSrc} />
      <SkillName>{props.data.name}</SkillName>
      {props.data.description}
    </Background>
  );
}
