import { GrTwitter, GrGithub } from 'react-icons/all'

import { ContactData } from 'data/type/ContactData'

export const ContactValue: ContactData[] = [
  {
    serviceName: "GitHub",
    url: "https://github.com/ko50",
    icon: GrGithub,
  },
  {
    serviceName: "Twitter",
    url: "https://twitter.com/ko_CottonLove",
    icon: GrTwitter,
  },
];