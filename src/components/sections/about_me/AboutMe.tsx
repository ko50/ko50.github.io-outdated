import React from 'react'
import styled from 'styled-components'

import { TransitionContext } from 'App'
import { BaseColors } from 'data/BaseColors'
import { AboutMeValue } from 'data/value/AboutMeValue'
import { Section } from 'components/sections/Section'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: fit-content;
  justify-content: center;
`;

const Introduce = styled.div<{ index: number, visible: Boolean }>`
  width: auto;
  height: auto;
  margin: 15px 0px;
  padding: 0px 10px;
  border-left: 4px solid ${BaseColors.darkPurple};
  transition: 300ms;
  transition-delay: ${(props) => (props.index * 100) + 800}ms;
  transform: translateX(${(props) => props.visible ? "10px" : "0px"});
  opacity: ${(props) => props.visible ? "1" : "0"};
`;

const IntroduceTitle = styled.div`
  font-size: 1.3em;
  font-weight: 700;
  text-align: left;
  color: ${BaseColors.darkPurple};
`;

const IntroduceContent = styled.div`
  font-size: 1em;
  text-align: left;
  color: black;
`;

export const AboutMe = () => {
  return (
    <TransitionContext.Consumer>
      {currentViewIndex => {
        return <Section index={0} title="About Me" subTitle="自己紹介" content={(
          <Container>
            {AboutMeValue.map((value, index) => {
              return <Introduce index={index} visible={currentViewIndex === 0}>
                <IntroduceTitle>{value.title}</IntroduceTitle>
                <IntroduceContent>{value.content}</IntroduceContent>
              </Introduce>
            })}
          </Container>
        )} />
      }}
    </TransitionContext.Consumer>
  );
};