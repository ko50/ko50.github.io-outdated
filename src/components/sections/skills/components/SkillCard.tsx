import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { SkillData, SkillCategory } from 'data/type/SkillData'

const Background = styled.div`
  height: fit-content;
  width: 100%;
  box-sizing: border-box;
  padding: 1em 2em;
  margin: 2em 0;
  align-items: center;
  box-shadow: 0 0 5px 0 ${BaseColors.shadow};
`;

const Icon = styled.img`
  height: 2em;
  width: 2em;
`;

const SkillName = styled.div`
  font-size: 1.3em;
  color: ${BaseColors.darkGrey};
  margin-bottom: 0.5em;
`;

const Description = styled.div`
  font-size: 0.8em;
`;

type Props = { data: SkillData };

export const SkillCard = (props: Props) => {
  return (
    <Background>
      <Icon src={props.data.iconSrc} />
      <SkillName>{props.data.name}</SkillName>
      <Description>{props.data.description}</Description>
    </Background>
  );
}
