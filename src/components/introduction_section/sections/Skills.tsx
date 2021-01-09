import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { IntroductionSection } from 'components/introduction_section/IntroductionSection'



export const Skills = () => {
  return (
    <IntroductionSection index={1} title="Skills" subTitle="できること" content={(
      <div>
        Skills
      </div>
    )} />
  );
};
