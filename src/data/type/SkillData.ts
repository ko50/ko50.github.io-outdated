export const masteryLevelMap: { [key: string]: string } = {
  ["わからん"]: '',
  ["べんつよ"]: '🔰 勉強中',
  ["チョット"]: '🤔 少しだけできる',
  ["すき"]: '👍 すき',
  ["完全理解"]: '完全に理解した'
}

export type SkillData = {
  name: string,
  mastery: string,
  description: string,
  frameworks: string[],
}
