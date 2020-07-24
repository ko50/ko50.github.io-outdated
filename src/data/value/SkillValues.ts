import { SkillData, masteryLevelMap } from 'data/type/SkillData';

export const SkillValues: SkillData[] = [
  {
    name: "Python",
    mastery: masteryLevelMap[3],
    description: "最初に学んだプログラミング言語です。競プロでよく使います。",
    frameworks: ["DiscordBot"],
  },
  {
    name: "Dart",
    mastery: masteryLevelMap[4],
    description: "主にFlutterと一緒に使用します。最近は反抗期みたいです。",
    frameworks: ["Flutter", "DiscordBot"],
  },
  {
    name: "Kotlin",
    mastery: masteryLevelMap[2],
    description: "自由度が高いのに綺麗に書けるので、書いていて楽しくてとても好きです。",
    frameworks: ["Android-Native"],
  },
  {
    name: "TypeScript",
    mastery: masteryLevelMap[2],
    description: "このポートフォリオを書くのに合わせ、Reactと一緒に勉強しています。",
    frameworks: ["React"],
  },
  {
    name: "CSS",
    mastery: masteryLevelMap[3],
    description: "つい強引な記法をしてしまうので、早く完全理解したいです。",
    frameworks: ["styled-components"],
  },
  {
    name: "Go",
    mastery: masteryLevelMap[2],
    description: "少し勉強したものの放置中なので、時間ができ次第また触ろうと思っています。",
    frameworks: ["DiscordBot"],
  },
];
