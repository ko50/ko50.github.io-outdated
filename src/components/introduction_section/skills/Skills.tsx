import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { TransitionContext } from 'App'
import { IntroductionSection } from 'components/introduction_section/IntroductionSection'
import { SkillData, SkillCategory } from 'data/type/SkillData'
import { SkillValue } from 'data/value/SkillValue'

export const Skills = () => {
  return (
    <TransitionContext.Consumer>
      {currentViewIndex => (
        <IntroductionSection index={1} title="Skills" subTitle="できること" content={(
          <>
          </>
        )} />
      )}
    </TransitionContext.Consumer>
  );
};
