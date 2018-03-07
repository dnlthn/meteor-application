import React from 'react';
import glamorous from 'glamorous';

const Button = glamorous.button({
  cursor: 'pointer',
  borderRadius: '2px',
  border: '1px solid #5661B3',
  fontWeight: '600',
  fontSize: '1.25rem',
  letterSpacing: '0.05rem',
  textTransform: 'uppercase',
  color: '#5661B3',
  fontFamily: 'Source Sans Pro',
  padding: '.25rem .75rem .25rem .75rem',
  margin: '0 .5rem 0 .5rem',
  boxSizing: 'border-box',
  ':focus': { outline: 0 },
  ':hover': {
    background: '#5661B3',
    color: 'white'
  }
});

const SecondaryButton = ({ onClick, children }) => (
  <Button onClick={onClick}>{children}</Button>
);

export default SecondaryButton;
