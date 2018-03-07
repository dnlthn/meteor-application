import React from 'react';
import glamorous from 'glamorous';

import yellow_icon from '../../svg/yellow-github.svg';
import purple_icon from '../../svg/purple-github.svg';

import { HeaderText } from '../shared';

const Button = glamorous.button(
  {
    cursor: 'pointer',
    border: 'none',
    fontFamily: 'Source Sans Pro',
    position: 'relative',
    marginRight: '2.25rem',
    ':focus': { outline: 0 }
  },
  ({ darkBackground }) =>
    darkBackground ? { color: '#FECA57' } : { color: '#5661B3' }
);

const Icon = glamorous.img({
  position: 'absolute',
  top: '12px',
  left: '120px',
  width: '1.75rem'
});

const GitHubButton = ({ onClick, color, darkBackground }) => (
  <Button onClick={onClick} darkBackground={darkBackground}>
    {darkBackground ? (
      <Icon src={yellow_icon} alt={'GitHub Icon'} />
    ) : (
      <Icon src={purple_icon} alt={'GitHub Icon'} />
    )}
    <HeaderText darkBackground={darkBackground}>VIEW SOURCE</HeaderText>
  </Button>
);

export default GitHubButton;
