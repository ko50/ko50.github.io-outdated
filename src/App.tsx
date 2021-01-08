import React from 'react';
import styled from 'styled-components';

import { Header } from 'components/header/Header'
import Hello from 'components/hello/Hello'
import { TransitionStatus, TransitionContext } from 'types/TransitionStatus'

const Root = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Root>
      <Header displayedIndex={0} />
      <Hello />
    </Root >
  );
}

export default App;
