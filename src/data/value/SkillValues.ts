import { SkillData, masteryLevelMap } from 'data/type/SkillData';

export const SkillValues: SkillData[] = [
    {
        name: "Python",
        mastery: masteryLevelMap["チョット"],
        description: "最初に学んだプログラミング言語です。簡単な処理を書くのに適していて重宝します。",
        frameworks: ["DiscordBot"],
    },
    {
        name: "Dart",
        mastery: masteryLevelMap["すき"],
        description: "好きです。主にFlutterと一緒に使用します。最近は反抗期みたいです。",
        frameworks: ["Flutter", "DiscordBot"],
    },
    {
        name: "Kotlin",
        mastery: masteryLevelMap["べんつよ"],
        description: "書いていて楽しいので好きです。秩序的かつ自由度の高いあの記法がとても好き。",
        frameworks: ["Android-Native"],
    },
    {
        name: "TypeScript",
        mastery: masteryLevelMap["べんつよ"],
        description: "このポートフォリオを書くのに合わせて勉強しています。",
        frameworks: ["React"],
    },
    {
        name: "CSS",
        mastery: masteryLevelMap["チョット"],
        description: "力づくでなんとかしてしまうので、もっとスマートに書けるようになりたいです。",
        frameworks: ["styled-components"],
    },
    {
        name: "Go",
        mastery: masteryLevelMap["べんつよ"],
        description: "少し勉強したものの放置中なので、時間ができた際にもう少し触ってみたい。",
        frameworks: ["DiscordBot"],
    },
];
