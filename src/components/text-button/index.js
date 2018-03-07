import React from 'react';
import glamorous from 'glamorous';

const Button = glamorous.button({
  color: '#5661B3',
  fontWeight: '600',
  fontSize: '1.25rem',
  letterSpacing: '0.05rem',
  textTransform: 'uppercase',
  fontFamily: 'Source Sans Pro',
  margin: '0 .5rem 0 .5rem',
  outline: '0',
  border: 'none',
  cursor: 'pointer',
  ':hover': {
    color: '#2F365F'
  }
});

const TextButton = ({ onClick, children }) => (
  <Button onClick={onClick}>{children}</Button>
);

export default TextButton;
