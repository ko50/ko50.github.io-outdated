import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { IntroductionSection } from 'components/sections/IntroductionSection'



export const Works = () => {
  return (
    <IntroductionSection index={2} title="Works" subTitle="やったこと" content={(
      <div>
        Works
      </div>
    )} />
  );
};