import React from 'react';
import styled from 'styled-components';
import cotton_circle from './cotton_circle.png';
import ko from './ko.png';
import { BaseColors } from './Color';
import './App.css';

const HeaderRoot = styled.header`
  position: sticky;
  background-color: ${BaseColors.header};
  height: 3em;
  width: 100%;
  text-align: left;
  float: left;
  color: ${BaseColors.text};
  border-bottom: 2px solid ${BaseColors.accent};
`;

const KO = styled.img`
  margin-left: 40px;
  margin-top: 0.6em;
  height: 2em;
`;

const BackCircle = styled.div`
  height: 33vmin;
  width: 33vmin;
  background-color: white;
  border-radius: 50%;
  align-items: center;
`;

const Cotton = styled.img`
  height: 30vmin;
  pointer-events: none;
  border: 0.5em double #ffb8f1;
  border-radius: 50%;
`;

const A = styled.a`
  color: ${BaseColors.link};
`;

const Root = styled.div`
  text-align: center;
  background-color: #ffffff;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  font-weight: bold;
`;

const Welcome = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${BaseColors.header};
`;

function App() {
  return (
    <Root>
      <HeaderRoot>
        <KO src={ko} alt="ko" />
      </HeaderRoot>
      <Welcome>
        <BackCircle>
          <Cotton src={cotton_circle} alt="icon" />
        </BackCircle>
        <p>Hello World, My name is ko!</p>
        <A href="https://twitter.com/ko_CottonLove" rel="noopener noreferrer">
          Twitter
        </A>
      </Welcome>
    </Root>
  );
}

export default App;
