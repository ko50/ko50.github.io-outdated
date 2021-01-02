import { SkillData, masteryLevelMap } from 'data/type/SkillData';

export const SkillValues: SkillData[] = [
  {
    name: "Python",
    mastery: masteryLevelMap[3],
    description: "最初に触ったプログラミング言語です。競プロとかで使います。",
    frameworks: ["DiscordBot"],
  },
  {
    name: "Dart",
    mastery: masteryLevelMap[3],
    description: "主にFlutterと一緒に使用します。Flutter楽しいのでみんなやりましょう。",
    frameworks: ["Flutter", "DiscordBot"],
  },
  {
    name: "Kotlin",
    mastery: masteryLevelMap[2],
    description: "なんもわかりませんが、書いていると楽しくなれます。",
    frameworks: ["Android-Native"],
  },
  {
    name: "TypeScript",
    mastery: masteryLevelMap[2],
    description: "このポートフォリオはTS(React)で書かれてます。ReactNativeとかも触ってみたい。",
    frameworks: ["React"],
  },
  {
    name: "CSS",
    mastery: masteryLevelMap[2],
    description: "デバイスやブラウザに依存しない、安全なデザインを書けません。",
    frameworks: ["styled-components"],
  },
/*  {
    name: "Go",
    mastery: masteryLevelMap[2],
    description: "少し勉強したものの放置中なので、時間ができ次第また触ろうと思っています。",
    frameworks: ["DiscordBot"],
  }, */
];
