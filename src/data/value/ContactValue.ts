import { GrTwitter, GrGithub } from 'react-icons/all'

import { ContactData } from 'data/type/ContactData'

export const ContactValue: ContactData[] = [
  {
    serviceName: "GitHub",
    caption: "@ko_CottonLove",
    url: "https://github.com/ko50",
    icon: GrGithub,
  },
  {
    serviceName: "Twitter",
    caption: "@ko50",
    url: "https://twitter.com/ko_CottonLove",
    icon: GrTwitter,
  },
];