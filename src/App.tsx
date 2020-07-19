import React from 'react';
import styled from 'styled-components';
import { BaseColors } from './data/Color';
import { Header } from './components/header/Header';
import { Cover } from './components/cover/Cover';


const Root = styled.div`
  text-align: center;
  min-height: 70vh;
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
