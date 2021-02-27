import { AboutMeData } from 'data/type/AboutMeData'
import { CalcAge } from 'helpers/CalcAge'

const myBirthDay: Date = new Date(2004, 2, 24);

export const AboutMeValue: AboutMeData[] = [
  {
    title: "所属",
    content: "茨城工業高等専門学校 国際創造工学科 二年",
  },
  {
    title: "専攻",
    content: "情報系/グローバル系 専攻",
  },
  {
    title: "仕様",
    content: `${CalcAge(myBirthDay)}歳 男性`,
  },
  {
    title: "その他",
    content: "テトリスと少女終末旅行が好きです",
  },
];
