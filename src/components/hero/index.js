import React, { Fragment } from 'react';
import glamorous from 'glamorous';

import NavBar from '../navbar';
import { TopBar, FlexContainer, Right } from '../shared';

import meteor_logo from '../../svg/meteor.svg';

const HeroLeft = glamorous.div({
  color: '#4A4A4A',
  margin: '2rem 0 7.5rem 0'
});

const Introduction = glamorous.div({
  fontWeight: '200',
  fontSize: '3rem'
});

const Intention = glamorous.div({
  fontWeight: '200',
  fontSize: '1.75rem',
  paddingLeft: '.25rem',
  lineHeight: '1.25'
});

const Job = glamorous.span({
  fontWeight: '600',
  fontStyle: 'italic'
});

const Hero = () => (
  <Fragment>
    <TopBar />
    <FlexContainer alignItems={'flex-start'}>
      <HeroLeft>
        <Introduction>Hello, I'm Daniel.</Introduction>
        <Intention>And this is my application</Intention>
        <Intention>
          for the <Job>Frontend Application Engineer</Job>
        </Intention>
        <Intention>
          position at
          <img
            style={{
              marginLeft: '.75rem',
              marginTop: '-1rem'
            }}
            src={meteor_logo}
            alt="Meteor Logo"
          />
        </Intention>
      </HeroLeft>
      <Right>
        <NavBar />
      </Right>
    </FlexContainer>
  </Fragment>
);

export default Hero;
