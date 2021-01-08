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
  padding-top: 1em;
  padding-bottom: 1em;
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

const Copyright = styled.div`
  font-size: 0.5em;
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