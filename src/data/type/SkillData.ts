export const masteryLevelMap: { [key: number]: string } = {
  1: '👀 興味はある',
  2: '🔰 勉強中',
  3: '🤔 少しだけできる',
  4: '👍 すき',
  5: '✨ 完全に理解した'
}

export type SkillData = {
  name: string,
  mastery: string,
  description: string,
  frameworks: string[],
}
