import React from 'react';
import glamorous from 'glamorous';

const Button = glamorous.button(
  {
    cursor: 'pointer',
    background: '#5661B3',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.20)',
    borderRadius: '2px',
    fontWeight: '600',
    fontSize: '1.25rem',
    letterSpacing: '0.05rem',
    textTransform: 'uppercase',
    color: '#E6E8FF',
    fontFamily: 'Source Sans Pro',
    padding: '.25rem .75rem .25rem .75rem',
    position: 'relative',
    margin: '0 .5rem 0 .5rem',
    ':focus': { outline: 0 },
    ':hover': {
      boxShadow: '0 2px 4px 0 rgba(0,0,0,0.0)',
      transform: 'translateY(1px)'
    }
  },
  ({ icon }) => icon && { paddingLeft: '40px' }
);

const Icon = glamorous.img({
  position: 'absolute',
  top: '8px',
  left: '11px',
  width: '1.25rem'
});

const PrimaryButton = ({ svg, onClick, children }) => (
  <Button onClick={onClick} icon={svg !== null}>
    {svg && <Icon src={svg} alt={`${children} icon`} />}
    {children}
  </Button>
);

export default PrimaryButton;
