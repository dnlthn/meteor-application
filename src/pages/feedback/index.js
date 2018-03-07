import React, { Fragment } from 'react';
import glamorous from 'glamorous';
import { Consumer as NavigationConsumer } from '../../context/navigation';

import { BodyText, Container } from '../../components/shared';
import PrimaryButton from '../../components/primary-button';
import TextButton from '../../components/text-button';
import SecondaryButton from '../../components/secondary-button';
import resume_icon from '../../svg/news-paper.svg';
import Comments from '../../components/comments';

const Title = glamorous.div({
  fontSize: '1.875rem',
  color: '#5661B3'
});

const ButtonContainer = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  margin: '1.5rem'
});

const Feedback = () => (
  <Container>
    <div>
      <Title>Feedback Welcome</Title>
      <BodyText>
        I encourage all types of feedback, regardless of whether it is negative
        or positive. There are three ways to choose to give feedback.
        <br />
        <br />
        If you would like a response from me, Slack will give the quickest
        response time, though I will do my best to respond to an email as soon
        as I see it.
        <br />
        <br />
        If you do not want, or need, a response, feel free to leave a comment
        below. You can choose to leave your name or comment anonymously.
        Sometimes people do not want negativity attached to their name, but I
        would still appreciate the negative feedback to identify areas for
        improvement. The only thing I ask, is that you do not maliciously hit
        the server with comments since there is not a requirement to login due
        to the nature of this website. Additionally, this requirement means
        comments are immutable once submitted.
        <br />
        <br />
        I appreciate you taking the time to read this application and look
        forward to any feedback.
        <br />
        <br />
        Thanks,
        <br />
        Daniel Thompson
      </BodyText>
    </div>

    <ButtonContainer>
      <NavigationConsumer>
        {({ navigate_to }) => (
          <Fragment>
            <TextButton onClick={navigate_to.resume}>SEND EMAIL</TextButton>
            <SecondaryButton onClick={navigate_to.resume}>
              JOIN SLACK
            </SecondaryButton>
            <PrimaryButton onClick={navigate_to.resume} svg={resume_icon}>
              VIEW RESUME
            </PrimaryButton>
          </Fragment>
        )}
      </NavigationConsumer>
    </ButtonContainer>

    <Comments />
  </Container>
);

export default Feedback;
