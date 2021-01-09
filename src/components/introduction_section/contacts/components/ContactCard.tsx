import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { ContactData } from 'data/type/ContactData'
import { IntroductionSection } from 'components/introduction_section/IntroductionSection'

const Background = styled.div`
  width: 35%;
  padding: 1em;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 5px 0 ${BaseColors.shadow};
  transition: 300ms;

  :hover {
    transform: scale(2, 2) rotate(1);
  }
`;

const Link = styled.a`
  opacity: 0;
  height: 100%;
  width: 100%;
`;

const Leading = styled.div`
  height: 2em;
  width: 2em;
`;

const CardName = styled.div`
  font-size: 1.5em;
  margin-left: 1em;
  color: ${BaseColors.darkGrey};
`;

type Props = { data: ContactData };

export const ContactCard = (props: Props) => {
  return (
    <Background>
      <Link href={props.data.url} target="_blank" rel="noopener noreferrer">
        <Leading>{props.data.icon}</Leading>
        <CardName>{props.data.caption}</CardName>
      </Link>
    </Background>
  );
};