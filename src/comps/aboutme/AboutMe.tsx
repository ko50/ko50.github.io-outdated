import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';
import { TopicTitle } from '../common/TopicTitle';

const Root = styled.div`
  align-items: center;
  margin-top: 1em;
  color: ${BaseColors.darkestpurple}
`;

const InfoList = styled.ul`
  margin-top: 40px;
  text-align: start;
  padding: 0 3em 0;
  border-top: 1px solid ${BaseColors.darkestpurple};
  border-right: 2px solid ${BaseColors.darkestpurple};
  border-bottom: 2px solid ${BaseColors.darkestpurple};
  border-left: 1px solid ${BaseColors.darkestpurple};
  border-radius: 2em;  border-radius: 2em;
`;

const Title = styled.span`
  font-weight: bold;
  forn-size: 1em;
  margin-top: 2em;
`;

const Introduce = styled.p`
  font-size: 1em;
  font-weight: bold;
  text-align: start;
  display: inline-block;
  color: ${BaseColors.darkestpurple};
`;

export function AboutMe(): JSX.Element {
  return (
    <Root>
      <TopicTitle topic="About Me" />
      <InfoList>
        <br />
        <Title>所属</Title><br />茨城工業高等専門学校 国際創造工学科 本科二年次 <br />
        <br />
        <Title>専攻</Title><br />情報系/グローバル系 専攻 <br />
        <br />
        <Title>名前</Title><br />koと申します。本名由来ですがとても呼びにくいので呼称としてふさわしくない。 <br />
        <br />
        <Title>出生</Title><br />西暦2004に生まれ、現在16歳の人間として生活しています。 <br />
        <br />
      </InfoList>
      <Introduce>
        何もかも出遅れた系高専生です。その辺で頭を抱えて過去を呪っています。 <br />
        春からプログラミングを始め、今は課題と戦いを繰り広げる日々を送っています。
      </Introduce>
    </Root>
  );
}