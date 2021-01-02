import React from 'react';
import styled from 'styled-components';
import { TopicTitle, StrongText } from '../common/Formatter';
import { ContactValues } from 'data/value/ContactValues';
import { ContactInfo } from './mol/ContactInfo';

const Root = styled.div`
  align-items: center;
  margin-bottom: 2em;
`;

const ContactInfoList = styled.div`
  margin: 0.5em 2em;
`;

export function Contact(): JSX.Element {
  return (
    <Root>
      <TopicTitle>Contact</TopicTitle>
      <StrongText>連絡先</StrongText>
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