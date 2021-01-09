import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'values/BaseColors'
import { IntroductionSection } from 'components/introduction_section/IntroductionSection'



export const AboutMe = () => {
  return (
    <IntroductionSection index={0} content={(
      <div>
        AboutMe
      </div>
    )} />
  );
};