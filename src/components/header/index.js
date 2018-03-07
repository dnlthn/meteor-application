import React, { Fragment } from 'react';
import glamorous from 'glamorous';

import NavBar from '../navbar';
import { TopBar, FlexContainer, Left, Right } from '../shared';

import meteor_logo from '../../svg/meteor.svg';

const LogoText = glamorous.div({
  fontWeight: '200',
  fontSize: '1.5rem',
  color: '#4A4A4A',
  marginRight: '.375rem'
});

const Header = () => (
  <Fragment>
    <TopBar />
    <FlexContainer alignItems={'center'}>
      <Left>
        <LogoText>daniel to </LogoText>
        <img src={meteor_logo} alt="Meteor Logo" />
      </Left>
      <Right>
        <NavBar />
      </Right>
    </FlexContainer>
  </Fragment>
);

export default Header;
