import { SkillData, masteryLevelMap } from 'data/type/SkillData';

export const SkillValues: SkillData[] = [
  {
    name: "Python",
    mastery: masteryLevelMap[3],
    description: "最初に学んだプログラミング言語です。簡単な処理を書くのに適していて重宝します。",
    frameworks: ["DiscordBot"],
  },
  {
    name: "Dart",
    mastery: masteryLevelMap[4],
    description: "好きです。主にFlutterと一緒に使用します。最近は反抗期みたいです。",
    frameworks: ["Flutter", "DiscordBot"],
  },
  {
    name: "Kotlin",
    mastery: masteryLevelMap[2],
    description: "書いていて楽しいので好きです。秩序的かつ自由度の高いあの記法がとても好き。",
    frameworks: ["Android-Native"],
  },
  {
    name: "TypeScript",
    mastery: masteryLevelMap[2],
    description: "このポートフォリオを書くのに合わせて勉強しています。",
    frameworks: ["React"],
  },
  {
    name: "CSS",
    mastery: masteryLevelMap[3],
    description: "力づくでなんとかしてしまうので、もっとスマートに書けるようになりたい。",
    frameworks: ["styled-components"],
  },
  {
    name: "Go",
    mastery: masteryLevelMap[2],
    description: "少し勉強したものの放置中なので、時間ができた際にもう少し触ってみたい。",
    frameworks: ["DiscordBot"],
  },
];
