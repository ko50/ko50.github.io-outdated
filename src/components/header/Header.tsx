import React from 'react'
import styled from 'styled-components'
import { BaseColors } from 'values/BaseColors'

type Props = {
  currentIndex: number
};

const Background = styled.div`
  width: 100%;
  height: auto;
  background-color: ${BaseColors.darkPurple};
  padding-left: 30px;
  padding-right: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 4px solid ${BaseColors.purplePink};
  float: left;
  vertical-align: center;
`;

const TitleText = styled.p`
  flex: 1;
  font-size: 1.5em;
  font-weight: 900;
`;

const TransButton = styled.p`
  width: auto;
  height: auto;
  font-size: 1.2em;
  color: white; // TODO provide color
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
      <TitleText>ko's Portfolio</TitleText>

      { subViews.map((value: string) => (
        <TransButton>
          {value}
        </TransButton>
      ))}
    </Background>
  );
}
