import React from 'react';
import glamorous from 'glamorous';

import { BodyText } from '../../components/shared';

const LighterText = glamorous.p({
  margin: '0',
  padding: '0',
  color: '#8795A1'
});

const TitleText = glamorous.p({
  margin: '0',
  padding: '0',
  fontSize: '1.5rem',
  color: '#22292F'
});

const EducationOrExperience = ({ date, location, title, company, body }) => (
  <div
    style={{
      padding: '0 0 0 1.25em',
      borderLeft: '3px solid #5661B3',
      lineHeight: '1.5',
      width: '650px'
    }}
  >
    <LighterText>{`${date} | ${location}`}</LighterText>
    <TitleText>{title}</TitleText>
    <LighterText>{company}</LighterText>
    {body && <BodyText>{body}</BodyText>}
  </div>
);

export default EducationOrExperience;
