import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'values/BaseColors'

const Background = styled.div`
  background: linear-gradient(white, ${BaseColors.purplePink});
  flex: 1;
`;

export function Hello() {
  return (
    <Background>

    </Background>
  )
}