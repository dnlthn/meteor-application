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
          I am a web developer that specializes in frontend development, but
          enjoys the entire process of developing a user focused product to help
          people succeed. When I am not working, I spend my time consuming
          content, such as screencasts, podcasts, blogs, and occasionally books,
          about new and exciting, or new to me, web technologies.
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
          margin: '.75rem 0 1rem 0',
          flex: '0 0 100%'
        }}
      >
        You are one of the leaders in cutting edge development tooling for the
        JavaScript ecosystem. From Meteor to Galaxy to Apollo, you release tools
        that help developers all around the world be more effective, and
        happier, in their daily workflow.
      </BodyText>
    </Box>
  </Container>
);

export default WhoAreWe;
