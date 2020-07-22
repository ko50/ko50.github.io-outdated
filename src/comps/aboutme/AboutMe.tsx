import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';
import { AboutMeValues } from 'data/value/AboutMeValues';
import { TopicTitle, StrongText } from '../common/Formatter';
import { Information } from './atom/Information';
import { InfoList } from './mol/InfoList';

const Root = styled.div`
  align-items: center;
  margin-top: 1em;
  color: ${BaseColors.purpleblack}
`;

const Introduce = styled(StrongText)`
  display: inline-block;
  text-align: start;
`;

export function AboutMe(): JSX.Element {
  return (
    <Root>
      <TopicTitle>About Me</TopicTitle>
      <StrongText>自己紹介</StrongText>
      <InfoList>
        {AboutMeValues.map((info) =>
          <Information
            title={info.title}
            content={info.content} />
        )}
      </InfoList>
      <Introduce>
        何もかも出遅れた系高専生です。一日に一回は頭を抱えて過去を呪っています。 <br />
        春からプログラミングを始め、今は課題と戦いを繰り広げる日々を送っています。
      </Introduce>
    </Root>
  );
}
