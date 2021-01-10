import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { TransitionContext } from 'App'
import { FadeoutAnimation, FadeinAnimation } from 'helpers/FadeAnimation'

const Background = styled.div<{ visible: Boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  transition: 300ms;
  transition-delay: ${(props) => props.visible ? "400" : "0"}ms;
  opacity: ${(props) => props.visible ? "1" : "0"};
  transform: translateY(${(props) => props.visible ? "0" : "3px"});
  z-index: ${(props) => props.visible ? "1" : "0"};

  animation: ${(props) => (
    props.visible
      ? FadeinAnimation
      : FadeoutAnimation
  )};
  animation-delay: ${(props) => props.visible ? "200" : "0"}ms;
  animation-duration: 300ms;
`;

const Title = styled.div`
  width: fit-content;
  font-size: 2.5em;
  font-weight: 900;
  color: ${BaseColors.darkPurple};
  margin: 2em 1em 0.5em 1em;
  border-bottom: 1px solid ${BaseColors.darkPurple};
`;

const SubTitle = styled.div`
  font-size: 0.9em;
  margin-bottom: 2em;
`;

type Props = {
  index: number,
  title: string,
  subTitle: string,
  content: JSX.Element,
};

export const Section = (props: Props) => {
  return (
    <TransitionContext.Consumer>
      { currentViewIndex => (
        <Background visible={currentViewIndex === props.index}>
          <Title>{props.title}</Title>
          <SubTitle>{props.subTitle}</SubTitle>
          {props.content}
        </Background>
      )}
    </TransitionContext.Consumer>
  );
}
