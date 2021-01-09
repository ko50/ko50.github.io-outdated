export enum SkillCategory {
  language = 'Languages',
  framework = 'Frameworks',
  tool = 'Tools',
};

export type SkillData = {
  skillType: SkillCategory,
  iconSrc: string,
  name: string,
  description: string,
};
