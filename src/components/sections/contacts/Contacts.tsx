import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { Section } from 'components/sections/Section'
import { ContactValue } from 'data/value/ContactValue'
import { TransitionContext } from 'App'
import { ContactCard } from 'components/sections/contacts/components/ContactCard'

const Container = styled.div<{ visible: Boolean }>`
  width: auto;
`;

export const Contacts = () => {
  return (
    <Section index={3} title="Contacts" subTitle="連絡先" content={(
      <TransitionContext.Consumer>
        {currentViewIndex => (
          <Container visible={currentViewIndex === 3}>
            {ContactValue.map((value) => (
              <ContactCard data={value} />
            ))}
          </Container>
        )}
      </TransitionContext.Consumer>
    )} />
  );
};