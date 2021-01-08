import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'values/BaseColors'
import { HoverContext } from 'components/header/Header'

const Button = styled.div<{ isWhite: Boolean }>`
  color: ${BaseColors.purplePink};
  font-weight: 700;
  height: 1.2em;
  margin-left: 15px;
  border-bottom: 1px solid ${BaseColors.purplePink};
  transition: 300ms;
  ${(props) => (props.isWhite ? "color: white;" : "")}
`;

type Props = {
  index: number,
  text: string,
  onHover: (index: number) => void,
  onDisHover: () => void,
};

const TransitionButton = (props: Props) => {
  return (
    <HoverContext.Consumer>
      { value => (
        <Button
          isWhite={value == props.index || value == -1} // TODO SelectedIndex
          onMouseEnter={(_) => props.onHover(props.index)}
          onMouseLeave={(_) => props.onDisHover()}
        >
          {props.text}
        </Button>
      )}
    </HoverContext.Consumer>
  );
};

export default TransitionButton;