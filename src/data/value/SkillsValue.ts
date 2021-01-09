import { SkillData, SkillType } from 'data/type/SkillData'

export const SkillsValue: SkillData[] = [
  {
    skillType: SkillType.language,
    name: "Dart",
    description: "主にFlutterを書く言語として利用しています",
  },
  /* {
    skillType: SkillType.language,
    name: "Python",
    description: "競プロのときに使います (競プロをしないので使っていない)",
  }, */
  {
    skillType: SkillType.language,
    name: "TypeScript",
    description: "まだ初歩的なサイトを書く程度しかできません",
  },
  {
    skillType: SkillType.framework,
    name: "Flutter",
    description: "簡単にモバイルアプリケーションが開発できて好きです",
  },
  {
    skillType: SkillType.framework,
    name: "React",
    description: "TypeScriptと併用して学習中です",
  },
  {
    skillType: SkillType.tool,
    name: "Git",
    description: "人並みかそれ以下くらいには扱えます",
  },
  {
    skillType: SkillType.tool,
    name: "GitHub",
    description: "上に同じです",
  },
];