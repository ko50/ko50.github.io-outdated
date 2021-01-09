export enum SkillType {
  language,
  framework,
  tool,
};

export type SkillData = {
  skillType: SkillType,
  name: string,
  description: string,
};
