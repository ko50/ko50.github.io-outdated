import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { WorkValue } from 'data/value/WorkValue'
import { Section } from 'components/sections/Section'
import { WorkCard } from 'components/sections/works/components/WorkCard'


export const Works = () => {
  return (
    <Section index={2} title="Works" subTitle="やったこと" content={(
      <>
        {WorkValue.map((value) => <WorkCard data={value} />)}
      </>
    )} />
  );
};