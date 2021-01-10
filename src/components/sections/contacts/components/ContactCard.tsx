import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { ContactData } from 'data/type/ContactData'
import { TransitionContext } from 'App'
import { FadeoutAnimation, FadeinAnimation } from 'helpers/FadeAnimation'
import { Section } from 'components/sections/Section'

const Background = styled.a<{ visible: Boolean }>`
  width: 40%;
  display: flex;
  flex-direction: row;
  box-shadow: 2px 2px 5px 0 ${BaseColors.shadow};
  transition: 300ms;
  margin: 1em;
  padding: 1.5em;
  box-sizing: border-box;
  height: auto;
  width: auto;
  display: block;
  text-decoration: none;

  :hover {
    transform: rotate(-1deg) scale(1.5) translate3d(0, 0, 0);
  }

  animation: ${(props) => (
    props.visible
      ? FadeinAnimation
      : FadeoutAnimation
  )};
  animation-delay: ${(props) => props.visible ? "200" : "0"}ms;
  animation-duration: 300ms;
  visibility: ${(props) => props.visible ? "visible" : "hidden"};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Leading = styled.img`
  height: 3em;
  width: 3em;
`;

const CardName = styled.div`
  text-align: left;
  font-size: 1.4em;
  margin-left: 1em;
  color: ${BaseColors.darkGrey};
`;

type Props = { data: ContactData };

export const ContactCard = (props: Props) => {
  return (
    <TransitionContext.Consumer>
      {currentViewIndex => (
        <Background
          href={props.data.url}
          target="_blank"
          rel="noopener noreferrer"
          visible={currentViewIndex === 3}
        >
          <Container>
            <Leading src={props.data.iconSrc} />
            <CardName>{props.data.caption}</CardName>
          </Container>
        </Background>
      )}
    </TransitionContext.Consumer>
  );
};