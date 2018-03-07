import React from 'react';
import glamorous from 'glamorous';
import { Consumer as NavigationConsumer } from '../../context/navigation';

const NavButton = glamorous.button(
  {
    padding: '.25rem .5rem .25rem .5rem',
    margin: '0 .125rem 0 .125rem',
    fontFamily: 'Source Sans Pro',
    color: '#4A4A4A',
    cursor: 'pointer',
    background: 'transparent',
    letterSpacing: '0.05em',
    border: 'none',
    ':focus': { outline: 0 }
  },
  ({ selected }) =>
    selected
      ? {
          color: '#FFFFFF',
          borderRadius: '2px',
          background: '#5661B3'
        }
      : {
          ':hover': {
            color: '#5661B3'
          }
        }
);

const NavBar = () => (
  <NavigationConsumer>
    {({ current_page_name, navigate_to }) =>
      Object.keys(navigate_to).map(page_name => (
        <NavButton
          key={page_name}
          onClick={navigate_to[page_name]}
          selected={current_page_name === page_name}
        >
          {page_name.toUpperCase()}
        </NavButton>
      ))
    }
  </NavigationConsumer>
);

export default NavBar;
