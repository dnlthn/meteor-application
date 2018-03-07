import React, { Fragment } from 'react';

import NavBar from '../navbar';
import glamorous from 'glamorous';

import meteor_logo from '../../svg/meteor.svg';

const TopBar = glamorous.div({
  background: '#5661B3',
  height: '5px'
});

const FlexContainer = glamorous.ul({
  padding: '1rem 4.5rem 1rem 4.5rem',
  display: 'flex',
  alignItems: 'center',
  backgroundImage: 'linear-gradient(90deg, #FFFCE9 30%, #FBF2FF 80%)',
  borderBottom: '1px solid #F5E5FC',
  marginBottom: '2rem'
});

const Right = glamorous.li({
  marginLeft: 'auto'
});

const Left = glamorous.li({
  alignSelf: 'flex-start',
  display: 'flex',
  alignItems: 'baseline'
});

const LogoText = glamorous.div({
  fontWeight: '200',
  fontSize: '1.5rem',
  color: '#4A4A4A',
  marginRight: '.375rem'
});

const Header = () => (
  <Fragment>
    <TopBar />
    <FlexContainer>
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
