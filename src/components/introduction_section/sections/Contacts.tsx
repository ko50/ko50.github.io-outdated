import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { IntroductionSection } from 'components/introduction_section/IntroductionSection'



export const Contacts = () => {
  return (
    <IntroductionSection index={3} title="Contacts" subTitle="連絡先" content={(
      <div>
        Contacts
      </div>
    )} />
  );
};