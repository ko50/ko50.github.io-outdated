import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';
import { TopicTitle } from '../common/TopicTitle';

const Root = styled.div`
  align-items: center;
`;

const ProductsList = styled.div`

`;

export function Products(): JSX.Element {
  return (
    <Root>
      <TopicTitle topic="Products" />
      <ProductsList>
        null
      </ProductsList>
    </Root>
  );
}
