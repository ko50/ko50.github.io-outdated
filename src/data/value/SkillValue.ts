import { SkillData, SkillCategory } from 'data/type/SkillData'

export const SkillValue: SkillData[] = [
  {
    skillType: SkillCategory.language,
    name: "Dart",
    description: "主にFlutterを書く言語として利用しています",
  },
  /* {
    skillType: SkillCategory.language,
    name: "Python",
    description: "競プロのときに使います (競プロをしないので使っていない)",
  }, */
  {
    skillType: SkillCategory.language,
    name: "TypeScript",
    description: "まだ初歩的なサイトを書く程度しかできません",
  },
  {
    skillType: SkillCategory.framework,
    name: "Flutter",
    description: "簡単にモバイルアプリケーションが開発できて好きです",
  },
  {
    skillType: SkillCategory.framework,
    name: "React",
    description: "TypeScriptと併用して学習中です",
  },
  {
    skillType: SkillCategory.tool,
    name: "Git",
    description: "人並みかそれ以下くらいには扱えます",
  },
  {
    skillType: SkillCategory.tool,
    name: "GitHub",
    description: "上に同じです",
  },
];