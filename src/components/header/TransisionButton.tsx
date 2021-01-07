import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'values/BaseColors'

const Button = styled.div<{ isWhite: Boolean }>`
  color: ${(props) => (props.isWhite ? "white" : "${BaseColors.purplePink}")};
  font-weight: 700;
  height: 1.2em;
  margin-left: 15px;
  border-bottom: 1px solid ${BaseColors.purplePink};
`;

type Props = {
  index: number,
  text: string,
};

const TransitionButton = (props: Props) => {
  return (
    <Button isWhite={false}>
      {props.text}
    </Button>
  );
};

export default TransitionButton;