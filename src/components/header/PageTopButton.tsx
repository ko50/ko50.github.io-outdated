import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding-left: 30px;
  align-items: left;
  flex: 1;
  min-width: 0;
  font-size: 1.8em;
  height: 1em;
  font-weight: 900;
`;

const Title = styled.div`
  width: fit-content;
  text-align: left;
  cursor: pointer;
`;

type Props = { onClick: (index: number) => void };

const PageTopButton = (props: Props) => {
  return (
    <Container onClick={(_) => props.onClick(-1)}>
      <Title>ko's Portfolio</Title>
    </Container>
  );
};

export default PageTopButton;