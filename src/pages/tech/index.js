import React, { Fragment } from 'react';
import glamorous from 'glamorous';
import { Consumer as NavigationConsumer } from '../../context/navigation';

import {
  BodyText,
  HeaderText,
  SectionIntro,
  Right,
  Container
} from '../../components/shared';
import PrimaryButton from '../../components/primary-button';
import TextButton from '../../components/text-button';
import TechUsed from '../../components/tech-used';

import GitHubButton from '../../components/github-button';
import chat_bubble from '../../svg/chat-bubble-dots.svg';

const DisclaimerContainer = glamorous.div({
  background: '#2F365F',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.20)',
  borderRadius: '2px',
  color: '#E6E8FF',
  padding: '1rem 4rem 1rem 4rem',
  margin: '1rem',
  display: 'flex',
  flexDirection: 'column'
});

const DisclaimerHeader = glamorous.div({
  alignItems: 'baseline',
  display: 'flex'
});

const DisclaimerText = glamorous.div({
  fontSize: '1.875rem',
  color: '#FECA57'
});

const ButtonContainer = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  margin: '1.5rem'
});

const MarginBetweenSections = {
  marginTop: '1.5rem'
};

const Tech = () => (
  <Container>
    <DisclaimerContainer>
      <DisclaimerHeader>
        <DisclaimerText>Disclaimer</DisclaimerText>
        <Right>
          <GitHubButton darkBackground={true}>VIEW SOURCE</GitHubButton>
        </Right>
      </DisclaimerHeader>
      <BodyText darkBackground={true} style={{ marginTop: '0' }}>
        This website is severely over-engineered. Except for, maybe, the
        comments on the next page, the entire website would be better served
        using a static site generator, like Gatsby. However, the goal of this
        website is to show proof that I know, and can effectively work with, the
        technologies Meteor Development Group both uses and develops.
        <br />
        <br />
        All source code is available by clicking the link above. I have listed
        the more <strong>major</strong> technologies that I used below, along
        with a brief description of why.
      </BodyText>
    </DisclaimerContainer>

    <TechUsed style={MarginBetweenSections} />

    <div style={MarginBetweenSections}>
      <SectionIntro>Behind the scenes</SectionIntro>
      <HeaderText>GRAPHQL YOGA, PRISMA & APOLLO ENGINE TO GRAPHCOOL</HeaderText>
      <BodyText>
        I firmly believe that, when applying for a job, you should use the
        product so that you are not going in <em>blind</em>. For this reason,
        development was done locally with GraphQL Yoga, Prisma, and Apollo
        Engine. Prisma states that, when deploying to a public cluster without
        logging in, the deploy will expire in 7 days. The uncertainty of when
        this website will be viewed made me swap to Graphcool for production.
        <br />
        <br />
        Ironically, Prisma removed Prisma Cloud from closed beta yesterday, but
        by that time I had already switched everything to Graphcool 😅.
      </BodyText>
    </div>

    <ButtonContainer>
      <NavigationConsumer>
        {({ navigate_to }) => (
          <Fragment>
            <TextButton onClick={navigate_to.resume}>SKIP TO RESUME</TextButton>
            <PrimaryButton onClick={navigate_to.feedback} svg={chat_bubble}>
              GIVE FEEDBACK
            </PrimaryButton>
          </Fragment>
        )}
      </NavigationConsumer>
    </ButtonContainer>
  </Container>
);

export default Tech;
