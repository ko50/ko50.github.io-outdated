export enum SkillCategory {
  language,
  framework,
  tool,
};

export type SkillData = {
  skillType: SkillCategory,
  name: string,
  description: string,
};
