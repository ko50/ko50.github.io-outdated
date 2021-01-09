export enum SkillCategory {
  language,
  framework,
  tool,
};

export type SkillData = {
  skillType: SkillCategory,
  iconSrc: string,
  name: string,
  description: string,
};
