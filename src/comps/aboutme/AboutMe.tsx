import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';
import { TopicTitle, StrongText } from '../common/Formatter';

const Root = styled.div`
  align-items: center;
  margin-top: 1em;
  color: ${BaseColors.purpleblack}
`;

const InfoList = styled.ul`
  margin-top: 40px;
  text-align: start;
  padding: 0 3em 0;
  border-top: 1px solid ${BaseColors.purpleblack};
  border-right: 2px solid ${BaseColors.purpleblack};
  border-bottom: 2px solid ${BaseColors.purpleblack};
  border-left: 1px solid ${BaseColors.purpleblack};
  border-radius: 2em;
`;

const Introduce = styled(StrongText)`
  display: inline-block;
  text-align: start;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 1.2em;
  margin-top: 2em;
  color: ${BaseColors.purple};
`;

export function AboutMe(): JSX.Element {
  return (
    <Root>
      <TopicTitle>About Me</TopicTitle>
      <StrongText>自己紹介</StrongText>
      <InfoList>
        <br />
        <Title>所属</Title><br />茨城工業高等専門学校 国際創造工学科 本科二年次 <br />
        <br />
        <Title>専攻</Title><br />情報系/グローバル系 専攻 <br />
        <br />
        <Title>名前</Title><br />koと申します。とても呼びにくいので呼称としてふさわしくない。由来は本名です。 <br />
        <br />
        <Title>出生</Title><br />西暦2004に生まれ、現在16歳の男性として生活しています。 <br />
        <br />
      </InfoList>
      <Introduce>
        何もかも出遅れた系高専生です。一日に一回は頭を抱えて過去を呪っています。 <br />
        春からプログラミングを始め、今は課題と戦いを繰り広げる日々を送っています。
      </Introduce>
    </Root>
  );
}
