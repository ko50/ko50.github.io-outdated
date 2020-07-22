import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';
import { TopicTitle, StrongText } from '../common/Formatter';

const Root = styled.div`
  align-items: center;
`;

const ProductsList = styled.div`

`;

export function Products(): JSX.Element {
  return (
    <Root>
      <TopicTitle>Products</TopicTitle>
      <StrongText>成果物…そこになければないですね</StrongText>
      <ProductsList>
        null
      </ProductsList>
    </Root>
  );
}
