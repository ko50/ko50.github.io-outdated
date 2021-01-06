import React from 'react'
import styled from 'styled-components'
import { BaseColors } from 'values/BaseColors'

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
  margin-top: 10px;
  margin-bottom: 10px;
  float: right;
  display: flex;
  vertical-align: middle;
`;

const TitleText = styled.div`
  padding-left: 30px;
  flex: 1;
  min-width: 0;
  text-align: left;
  font-size: 1.7em;
  font-weight: 900;
`;

const ButtonsWrapper = styled.div`
  font-size: 1.2em;
  margin-right: 1.2em;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  height: 100%;
`;

const TransButton = styled.div`
  color: white; // TODO provide color
  font-weight: 700;
  height: 1.4em;
  margin-right: 10px;
  margin-left: 10px;
  border-bottom: 1px solid ${BaseColors.purplePink};
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
          {subViews.map((value: string) => (
            <TransButton>
              {value}
            </TransButton>
          ))}
        </ButtonsWrapper>
      </Container>
    </Background>
  );
}
