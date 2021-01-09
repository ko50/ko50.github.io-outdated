import React from 'react'
import styled from 'styled-components'

import { TransitionContext } from 'App'

const Background = styled.div<{ visible: Boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
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
