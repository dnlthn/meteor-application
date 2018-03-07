import React, { Fragment } from 'react';
import glamorous from 'glamorous';
import { Consumer as NavigationConsumer } from '../../context/navigation';

import { BodyText, HeaderText } from '../../components/shared';
import PrimaryButton from '../../components/primary-button';
import TextButton from '../../components/text-button';
import code_icon from '../../svg/code.svg';
import WhoAreWe from '../../components/who-are-we';
import Strengths from '../../components/strengths';
import Weaknesses from '../../components/weaknesses';

const Container = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
});

const ThankYou = glamorous.div({
  fontSize: '1.25rem',
  color: '#4A4A4A',
  fontWeight: '200'
});
const WhatsNext = glamorous.div({
  fontSize: '1.875rem',
  color: '#4A4A4A',
  fontWeight: '600'
});
const ButtonContainer = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  margin: '1.5rem'
});

const MarginBetweenSections = {
  marginTop: '2rem'
};

const About = () => (
  <Container>
    <WhoAreWe />
    <Strengths style={MarginBetweenSections} />
    <Weaknesses style={MarginBetweenSections} />

    <ThankYou style={MarginBetweenSections}>
      If you have read this far, thank you. I appreciate you.
    </ThankYou>
    <WhatsNext>So, what's next?</WhatsNext>

    <ButtonContainer>
      <NavigationConsumer>
        {({ navigate_to }) => (
          <Fragment>
            <TextButton onClick={navigate_to.resume}>SKIP TO RESUME</TextButton>
            <PrimaryButton onClick={navigate_to.tech} svg={code_icon}>
              VIEW TECH CHOICES
            </PrimaryButton>
          </Fragment>
        )}
      </NavigationConsumer>
    </ButtonContainer>
  </Container>
);

export default About;
