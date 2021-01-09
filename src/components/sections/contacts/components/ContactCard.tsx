import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { ContactData } from 'data/type/ContactData'
import { IntroductionSection } from 'components/sections/IntroductionSection'

const Background = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 5px 0 ${BaseColors.shadow};
  transition: 300ms;
  margin: 1em;

  :hover {
    transform: rotate(-1deg) scale(1.5);
  }
`;

const Link = styled.a`
  padding: 1.5em;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: block;
  text-decoration: none;
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
    <Background>
      <Link href={props.data.url} target="_blank" rel="noopener noreferrer">
        <Container>
          <Leading src={props.data.iconSrc} />
          <CardName>{props.data.caption}</CardName>
        </Container>
      </Link>
    </Background>
  );
};