import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';

export const TopicTitle = styled.p`
  color: ${BaseColors.purpleblack};
  font-weight: bold;
  padding-bottom: 0.1em;
  margin-bottom: 0px;
  display: inline-block;
  font-size: 3em;
  border-bottom: 2px solid ${BaseColors.purpleblack};
`;

export const StrongText = styled.p`
  font-size: 1em;
  font-weight: bold;
  color: ${BaseColors.purpleblack};
`;