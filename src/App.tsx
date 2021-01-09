import React from 'react';
import styled from 'styled-components';

import { BaseColors } from 'data/BaseColors'
import { Header } from 'components/header/Header'
import Hello from 'components/hello/Hello'
import Footer from 'components/common/Footer'
import { AboutMe } from 'components/introduction_section/sections/AboutMe'
import { Skills } from 'components/introduction_section/sections/Skills'
import { Works } from 'components/introduction_section/sections/Works'
import { Contacts } from 'components/introduction_section/sections/Contacts'

const Root = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div<{ visible: Boolean }>`
  width: 100%;
  background: linear-gradient(white, ${BaseColors.pink});
  transition: 300ms;
  flex: 1;
  ${(props) => props.visible ? "" : "background: white;"}
`;

export const TransitionContext: React.Context<number> = React.createContext(-1);

const App = () => {
  const [currentViewIndex, updateView] = React.useState(-1);

  return (
    <Root>
      <TransitionContext.Provider value={currentViewIndex}>
        <Header updateView={(index: number) => updateView(index)} />
        <ContentWrapper visible={currentViewIndex === -1}>
          <Hello />
          <AboutMe />
          <Skills />
          <Works />
          <Contacts />
        </ContentWrapper>
      </TransitionContext.Provider>
      <Footer />
    </Root >
  );
}

export default App;
