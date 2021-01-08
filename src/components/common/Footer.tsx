import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'values/BaseColors'

const Background = styled.div`
  position: sticky;
  left: 0;
  width: 100%;
  height: auto;
  background-color: ${BaseColors.darkPurple};
  border-top: 4px solid ${BaseColors.purplePink};
  box-shadow: 0px 0px 5px 0px ${BaseColors.shadow};
`;

const Container = styled.div`
  padding-top: 0.7em;
  padding-bottom: 0.7em;
  padding-right: 2em;
  padding-left: 2em;
`;

const CopyrightContainer = styled.div`
  padding-top: 0.5em;
`;

/*
const RightsNotation = styled.div`
  color: ${BaseColors.};
`;
*/

const Divider = styled.div` 
  width: 1.5em;
  height: 1px;
  margin-top: 2.5px;
  padding-bottom: 5px;
  margin-right: auto;
  margin-left: auto;
  border-top: 1px solid ${BaseColors.grey};
`;

const Copyright = styled.div`
  font-size: 0.4em;
  color: ${BaseColors.grey};
`;

export default function Footer() {
  return (
    <Background>
      <Container>
        <CopyrightContainer>
          <Divider />
          <Copyright>© 2020 ko</Copyright>
        </CopyrightContainer>
      </Container>
    </Background>
  )
}