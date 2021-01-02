import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';
import { ContactInfoData } from 'data/type/ContactData';

const Root = styled.div`
  height: 3em;
  width: 3em;
  margin: 0.5em 1em 0.5em 1em;
  display: inline-block;
  align-items: center;
`;

const Link = styled.a`
  height: 3em;
  width: 3em;
`;

const Logo = styled.span`
  width: 100%;
  height: 100%;
  font-size: 3em;
`;

const LogoWrapper = styled.div<{ imageColor: string }>`
  width: 100%;
  height: 100%;
  border-radius: 50%; 
  background-color: white;
  color: ${BaseColors.grey};
  transition: all 0.3s ease 0s;

  :hover {
    color: ${(props) => props.imageColor};
  }

  @media screen and (max-width: 50em) {
    color: ${(props) => props.imageColor};
    transition: none;
    :hover { none }
  }
`;

export function ContactButton(props: ContactInfoData): JSX.Element {
  return (
    <Root>
      <Link href={props.url} target="_blank" rel="noopener noreferrer">
        <Logo>
          <LogoWrapper imageColor={props.imageColor}>
            <props.icon />
          </LogoWrapper>
        </Logo>
      </Link>
    </Root>
  );
}