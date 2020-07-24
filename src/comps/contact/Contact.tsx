import React from 'react';
import styled from 'styled-components';
import { TopicTitle, StrongText } from '../common/Formatter';
import { BaseColors } from 'data/Color';
import { ContactValues } from 'data/value/ContactValues';
import { ContactInfo } from './mol/ContactInfo';

const Root = styled.div`
  align-items: center;
  margin-bottom: 2em;
`;

const ContactInfoList = styled.div`
  margin: 0.5em 2em;
  border: 2px solid ${BaseColors.purpleblack};
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .5);

  @media screen and (max-width: 50em) {
    border: none;
    box-shadow: none;
  }
`;

export function Contact(): JSX.Element {
  return (
    <Root>
      <TopicTitle>Contact</TopicTitle>
      <StrongText>ご連絡などがあればこちらへ</StrongText>
      <ContactInfoList>
        {ContactValues.map((contactInfo) =>
          <ContactInfo
            serviceName={contactInfo.serviceName}
            imageColor={contactInfo.imageColor}
            url={contactInfo.url}
            icon={contactInfo.icon}
          />
        )}
      </ContactInfoList>
    </Root>
  );
}