import React from 'react';
import glamorous from 'glamorous';

import { BodyText } from '../shared';

const Container = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%'
});

const GrayBackground = glamorous.div({
  background: '#F8FAFC',
  height: '100%'
});

const Header = glamorous.div({
  fontSize: '1.125em',
  color: '#2F365F',
  padding: '1rem 1rem .75rem 2rem'
});

const Box = glamorous.div({
  background: '#FFFFFF',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.15)',
  borderRadius: '2px',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400',
  marginTop: '-7.5rem'
});
const WhoAreWe = () => (
  <Container>
    <Box>
      <Header>Who am I?</Header>
      <GrayBackground>
        <BodyText
          style={{
            padding: '0 2rem 0 2rem',
            margin: '.75rem 0 1rem 0'
          }}
        >
          Maybe you’ve heard these different marketing terms, maybe you haven’t.
          Either way, let me help to clarify the difference between
        </BodyText>
      </GrayBackground>
    </Box>

    <Box>
      <GrayBackground>
        <Header>Who are you?</Header>
      </GrayBackground>
      <BodyText
        style={{
          padding: '0 2rem 0 2rem',
          margin: '.75rem 0 1rem 0'
        }}
      >
        Maybe you’ve heard these different marketing terms, maybe you haven’t.
        Either way, let me help to clarify the difference between them, because
        you should have all three if you want to market successfully. And
        knowing what they are may be your first step to accomplishing all three
        for your business.
      </BodyText>
    </Box>
  </Container>
);

export default WhoAreWe;
