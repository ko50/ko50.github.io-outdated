import React from 'react';
import styled from 'styled-components';

import { Header } from 'components/header/Header'
import Hello from 'components/hello/Hello'

const Root = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TransitionContext: React.Context<number> = React.createContext(-1);

const App = () => {
  const [currentViewIndex, updateView] = React.useState(-1);

  return (
    <Root>
      <TransitionContext.Provider value={currentViewIndex}>
        <Header updateView={(index: number) => updateView(index)} />
        <Hello />
        <div>{`${currentViewIndex}`}</div>
      </TransitionContext.Provider>
    </Root >
  );
}

export default App;
