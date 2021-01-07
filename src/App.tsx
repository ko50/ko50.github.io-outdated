import React from 'react';
import styled from 'styled-components';

import Header from 'components/header/Header'
import Hello from 'components/hello/Hello'
import Footer from 'components/common/Footer'
import TransitionStatus from 'types/TransitionStatus'

const Root = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// const transitionStatus: TransitionStatus = TransitionStatus();

// const ViewChangeContext: React.Context<number> = React.createContext(-1);

function App() {
  return (
    <Root>
      <Header currentIndex={0} />
      <Hello />
      <Footer />
    </Root >
  );
}

export default App;
