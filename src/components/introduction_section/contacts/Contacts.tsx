import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { IntroductionSection } from 'components/introduction_section/IntroductionSection'
import { ContactValue } from 'data/value/ContactValue'
import { ContactCard } from 'components/introduction_section/contacts/components/ContactCard'

export const Contacts = () => {
  return (
    <IntroductionSection index={3} title="Contacts" subTitle="連絡先" content={(
      <>
        {ContactValue.map((value) => (
          <ContactCard data={value} />
        ))}
      </>
    )} />
  );
};