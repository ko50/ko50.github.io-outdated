import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';
import { ProductionData } from 'data/type/ProductData';
import { GeneralText } from '../../common/Formatter';

const Root = styled.div`
  border: 2px solid ${BaseColors.purpleblack};
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .5);
  width: 25em;
  min-height: 10em;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 2em;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  color: ${BaseColors.purpleblack};

  :hover {
    background-color: ${BaseColors.purpleblack};
    color: white;
  }
`;

const Link = styled.a`
  display: inline-block;
  color: unset;
  text-decoration: none;
  width: 100%;
  height: 100%;
`;

const Eyecatch = styled.img`
  margin-top: 0px;
  min-height: 6em;
  width: 100%;
  box-shadow: 0 0px 2px 0 rgba(0, 0, 0, .5);
`;

const Title = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  text-align: start;
  margin: 2px 1em;
  bottom-border: 2px solid ${BaseColors.purpleblack};
`;

const Description = styled(GeneralText)`
  margin: 0.5em 1em;
  color: unset;
`;

const Lang = styled.div`
  margin: 0.5em 1em;
  font-weight: bold;
  border-radius: 0.5em;
  background-color: black;
  display: inline-block;
  padding: 2px 4px;
  font-size: 0.5em;
  color: white;
  text-align: start;
`;

export function ProductCard(props: ProductionData): JSX.Element {
  const screenshotSrc: string = props.name + '.png';

  return (
    <Root>
      <Link href={props.url} target="_blank" rel="noopener noreferrer">
        <Eyecatch src={screenshotSrc} />
        <Title>{props.name}</Title>
        <Description>{props.description}</Description>
        <Lang>{props.langName}</Lang>
      </Link>
    </Root>
  );
}