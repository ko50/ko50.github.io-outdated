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
  color: ${BaseColors.purpleblack};
`;

const Introduce = styled(StrongText)`
  display: inline-block;
  text-align: start;
  font-size: 0.9em;

  @media screen and (max-width: 50em) {
    margin: 1em 2em;
    text-align: center;
    font-size: 0.8em;
    word-break: keep-all;
  }
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
        出遅れた系高専生です。弱いのでなにもできません。 <br />
      </Introduce>
    </Root>
  );
}
