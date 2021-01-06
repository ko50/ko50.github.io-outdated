import React from 'react';
import styled from 'styled-components';
import TransitionStatus from 'types/TransitionStatus'

const Root = styled.div`
  text-align: center;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// const transitionStatus: TransitionStatus = TransitionStatus();

const ViewChangeContext: React.Context<number> = React.createContext(-1);

function App() {
  return (
    <Root>
      何もありません
    </Root>
  );
}

export default App;
