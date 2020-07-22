import React from 'react';
import styled from 'styled-components';
import { Header } from './comps/header/Header';
import { Cover } from './comps/cover/Cover';
import { AboutMe } from './comps/aboutme/AboutMe';
import { Skills } from './comps/skills/Skills';
import { Products } from './comps/products/Products';

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
      <AboutMe />
      <Skills />
      <Products />
    </Root>
  );
}

export default App;
