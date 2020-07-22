import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';
import { TopicTitle } from '../common/TopicTitle';
import { SkillData } from 'data/type/SkillData';
import { SkillCard } from './mol/SkillCard';

const Root = styled.div`

`;

const Excuse = styled.p`
  color: ${BaseColors.darkestpurple};
  font-size: 1em;
  font-weight: bold;
`;

const SkillsUl = styled.div`
  float: top;
  display: inline-block;
  justify-content: space-evenly;
`;

const SkillsList = styled.div`

`;

export function Skills() {
  return (
    <Root>
      <TopicTitle topic="Skills" />
      <Excuse>怖い人が来ませんように…</Excuse>
      <SkillsUl>
        <SkillCard
          name="Python"
          masterLevel="チョット"
          description="最初に学んだプログラミング言語です。簡単な処理を書くのに適していて重宝します。"
          frameworks={["DiscordBot"]} />
        <SkillCard
          name="Dart"
          masterLevel="すき"
          description="好きです。主にFlutterと一緒に使用します。最近反逆されました。"
          frameworks={["Flutter", "DiscordBot"]} />
        <SkillCard
          name="Kotlin"
          masterLevel="べんつよ"
          description="書いていて楽しいので好きです。秩序的かつ自由度の高いあの記法がとても好き。"
          frameworks={["Android"]} />
        <SkillCard
          name="TypeScript"
          masterLevel="べんつよ"
          description="このポートフォリオを書くのに合わせて勉強しています。"
          frameworks={["React"]} />
        <SkillCard
          name="CSS"
          masterLevel="チョット"
          description="力づくでなんとかしてしまうので、もっとスマートに書けるようになりたいです。"
          frameworks={["styled-components"]} />
        <SkillCard
          name="Go"
          masterLevel="べんつよ"
          description="少し勉強したものの放置中です。時間ができた際にもう少し触ってみたいです。"
          frameworks={["DiscordBot"]} />
      </SkillsUl>
    </Root>
  );
}