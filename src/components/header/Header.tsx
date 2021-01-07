import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'values/BaseColors'
import TransitionButton from 'components/header/TransisionButton'

type Props = {
  currentIndex: number
};

const Background = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: ${BaseColors.darkPurple};
  color: white;
  border-bottom: 4px solid ${BaseColors.purplePink};
  box-shadow: 0px 0px 5px 0px ${BaseColors.shadow};
`;

const Container = styled.div`
  width: 100%;
  margin-top: 1em;
  margin-bottom: 1em;
  float: right;
  display: flex;
  flex-direction: left;
  vertical-align: middle;
`;

const TitleText = styled.div`
  padding-left: 30px;
  flex: 1;
  min-width: 0;
  text-align: left;
  font-size: 1.8em;
  height: 1em;
  font-weight: 900;
`;

const ButtonsWrapper = styled.div`
  font-size: 1.3em;
  margin-right: 2.6em;
  display: flex;
  height: 1em;
`;

export default function Header(props: Props) {
  const subViews: string[] = [
    "About Me",
    "Skills",
    "Works",
    "Contacts",
  ];

  return (
    <Background>
      <Container>
        <TitleText>ko's Portfolio</TitleText>

        <ButtonsWrapper>
          {subViews.map((value: string, index) =>
            <TransitionButton text={value} index={index} />
          )}
        </ButtonsWrapper>
      </Container>
    </Background>
  );
};
