import React from 'react';
import styled from 'styled-components';
import { Header } from './comps/header/Header';
import { Cover } from './comps/cover/Cover';

const Root = styled.div`
  text-align: center;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Root>
      <Header />
      <Cover />
    </Root>
  );
}

export default App;
