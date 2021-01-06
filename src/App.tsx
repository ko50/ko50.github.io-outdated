import React from 'react';
import styled from 'styled-components';

import Header from 'components/header/Header'
import TransitionStatus from 'types/TransitionStatus'

const Root = styled.div`
  text-align: center;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Hoge = styled.div`
  flex: 1;
`;

// const transitionStatus: TransitionStatus = TransitionStatus();

const ViewChangeContext: React.Context<number> = React.createContext(-1);

function App() {
  return (
    <Root>
      <Header currentIndex={0} />
      <Hoge>何もありません</Hoge>
    </Root >
  );
}

export default App;
