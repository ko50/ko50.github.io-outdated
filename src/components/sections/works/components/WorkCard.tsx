import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { WorkData } from 'data/type/WorkData'

const Background = styled.a`
  box-shadow: 0 1px 3px 0 ${BaseColors.shadow};
  width: 40%;
  display: block;
  text-decoration: none;
  border: 1px solid ${BaseColors.darkPurple};
  border-radius: 2px;
`;

const Snapshot = styled.img`
  box-shadow: 0 2px 2px 0 ${BaseColors.shadow};
  flex: 1;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0.6em 1em;
`;

const Title = styled.div`
  font-size: 1.2em;
  color: ${BaseColors.darkPurple};
  font-weight: 700;
  text-align: left;
`;

const Tags = styled.div`
  margin: 0.5em 0;
  font-size: 0.6em;
  text-align: left;
  color: black;
  font-weight: 300;
`;

type Props = { data: WorkData };

export const WorkCard = (props: Props) => {
  return (
    <Background href={props.data.url}>
      <Snapshot src={props.data.snapshotSrc} />
      <Container>
        <Title>{props.data.name}</Title>
        <Tags>Tag: {props.data.tag.join(" ")}</Tags>
      </Container>
    </Background>
  );
};
