import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'values/BaseColors'


const TitleText = styled.div`
  padding-left: 30px;
  flex: 1;
  min-width: 0;
  text-align: left;
  font-size: 1.8em;
  height: 1em;
  font-weight: 900;
`;

type Props = { onClick: (index: number) => void };

const PageTopButton = (props: Props) => {
  return (
    <TitleText onClick={(_) => props.onClick(-1)}>
      ko's Portfolio
    </TitleText>
  );
};

export default PageTopButton;