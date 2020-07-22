export const masteryLevelMap: { [key: string]: string } = {
  ["わからん"]: '',
  ["べんつよ"]: '🔰 勉強中',
  ["チョット"]: '🤔 少しだけできる',
  ["すき"]: '👍 すき',
  ["完全理解"]: '完全に理解した'
}

export class SkillData {
  name: string;
  masterLevel: string;
  description: string;
  frameworks: string[];

  constructor(name: string, masterLevel: string, description: string, frameworks: string[]) {
    this.name = name;
    this.masterLevel = masterLevel;
    this.description = description;
    this.frameworks = frameworks;
  }
}
