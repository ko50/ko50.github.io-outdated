import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { TransitionContext } from 'App'
import { HoverContext } from 'components/header/Header'

const Button = styled.div<{ hovered: Boolean }>`
  color: ${BaseColors.purplePink};
  font-weight: 700;
  height: 1.2em;
  margin-left: 15px;
  border-bottom: 1px solid ${BaseColors.purplePink};
  cursor: pointer;
  transition: 300ms;
  ${(props) => (props.hovered ? "color: white;" : "")}
`;

type Props = {
  index: number,
  text: string,
  onHover: (index: number) => void,
  onDisHover: () => void,
  onClick: (index: number) => void,
};

const TransitionButton = (props: Props) => {
  return (
    <TransitionContext.Consumer>
      { currentViewIndex => (
        <HoverContext.Consumer>
          { hoveredIndex => (
            <Button
              hovered={currentViewIndex === props.index || hoveredIndex === props.index || (currentViewIndex === -1 && hoveredIndex === -1)}
              onMouseEnter={(_) => props.onHover(props.index)}
              onMouseLeave={(_) => props.onDisHover()}
              onClick={(_) => props.onClick(props.index)}
            >
              {props.text}
            </Button>
          )}
        </HoverContext.Consumer>
      )}
    </TransitionContext.Consumer>
  );
};

export default TransitionButton;