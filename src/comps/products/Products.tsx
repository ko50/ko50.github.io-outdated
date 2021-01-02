import React from 'react';
import styled from 'styled-components';
import { TopicTitle, StrongText } from '../common/Formatter';
import { ProductValues } from 'data/value/ProductValues';
import { ProductCard } from './mol/ProductCard';

const Root = styled.div`
  align-items: center;
`;

const ProductsList = styled.div`
  align-items: center;
  width: 25em;
  margin: auto;
`;

export function Products(): JSX.Element {
  return (
    <Root>
      <TopicTitle>Products</TopicTitle>
      <StrongText>製作物・実績</StrongText>
      <ProductsList>
        {ProductValues.map((product) =>
          <ProductCard
            name={product.name}
            url={product.url}
            description={product.description}
            langName={product.langName}
          />
        )}
      </ProductsList>
    </Root>
  );
}
