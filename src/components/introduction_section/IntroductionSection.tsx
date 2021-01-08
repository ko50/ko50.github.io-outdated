import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'values/BaseColors'
import { TransitionContext } from 'App'

const Background = styled.div<{ visible: Boolean }>`
  width: 100%;
  flex: 1;
  background-color: white;
  transition: 300ms;
  opacity: ${(props) => props.visible ? "1" : "0"};
`;

type Props = {
  index: number,
  content: JSX.Element,
};

export const IntroductionSection = (props: Props) => {
  return (
    <TransitionContext.Consumer>
      { currentViewIndex => (
        <Background visible={currentViewIndex === props.index}>
          {props.content}
        </Background>
      )}
    </TransitionContext.Consumer>
  );
}
