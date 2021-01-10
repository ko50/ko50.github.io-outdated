import { SkillData, SkillCategory } from 'data/type/SkillData'

export const SkillValue: SkillData[] = [
  {
    skillType: SkillCategory.language,
    iconSrc: "skill_icon/Dart.svg",
    name: "Dart",
    description: "主にFlutterを書く言語として利用しています",
  },
  /* {
    skillType: SkillCategory.language,
    iconSrc: "",
    name: "Python",
    description: "競プロのときに使います (競プロをしないので使っていない)",
  }, */
  {
    skillType: SkillCategory.language,
    iconSrc: "skill_icon/TypeScript.svg",
    name: "TypeScript",
    description: "まだ初歩的なサイトを書く程度しかできません",
  },
  {
    skillType: SkillCategory.framework,
    iconSrc: "skill_icon/Flutter.svg",
    name: "Flutter",
    description: "Flutterは楽しいのでみんなやりましょう",
  },
  {
    skillType: SkillCategory.framework,
    iconSrc: "skill_icon/React.svg",
    name: "React",
    description: "TypeScriptと併用して学習中です",
  },
  {
    skillType: SkillCategory.tool,
    iconSrc: "skill_icon/Git.png",
    name: "Git",
    description: "人並みかそれ以下くらいには扱えます",
  },
  {
    skillType: SkillCategory.tool,
    iconSrc: "skill_icon/GitHub.svg",
    name: "GitHub",
    description: "基本的な使い方は履修できていると思います",
  },
];