import React, { Fragment } from 'react';
import glamorous from 'glamorous';
import { Consumer as NavigationConsumer } from '../../context/navigation';

import { BodyText, HeaderText } from '../../components/shared';
import PrimaryButton from '../../components/primary-button';
import TextButton from '../../components/text-button';
import code_icon from '../../svg/code.svg';

const Container = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
});

const StrengthsHeader = glamorous.h1({
  fontWeight: '200',
  fontSize: '1.875rem',
  color: '#4A4A4A'
});

const WeaknessContainer = glamorous.div({
  background: '#2F365F',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.20)',
  borderRadius: '2px',
  color: '#E6E8FF',
  padding: '2rem',
  margin: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '3rem',
  marginBottom: '3rem'
});

const WeaknessHeader = glamorous.div({
  fontWeight: '200',
  fontSize: '1.875rem',
  lineHeight: '1.125'
});

const WeaknessSubtitle = glamorous.div({
  fontSize: '1.625rem',
  fontWeight: '600'
});

const WhoContainer = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%'
});

const WhoGray = glamorous.div({
  background: '#F8FAFC',
  height: '100%'
});

const WhoHeader = glamorous.div({
  fontSize: '1.125em',
  color: '#2F365F',
  padding: '1rem 1rem .75rem 2rem'
});

const WhoBox = glamorous.div({
  background: '#FFFFFF',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.15)',
  borderRadius: '2px',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400',
  marginTop: '-7.5rem'
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

const About = () => (
  <Container>
    <WhoContainer>
      <WhoBox>
        <WhoHeader>Who am I?</WhoHeader>
        <WhoGray>
          <BodyText
            style={{
              padding: '0 2rem 0 2rem',
              margin: '.75rem 0 1rem 0'
            }}
          >
            Maybe you’ve heard these different marketing terms, maybe you
            haven’t. Either way, let me help to clarify the difference between
          </BodyText>
        </WhoGray>
      </WhoBox>

      <WhoBox>
        <WhoGray>
          <WhoHeader>Who are you?</WhoHeader>
        </WhoGray>
        <BodyText
          style={{
            padding: '0 2rem 0 2rem',
            margin: '.75rem 0 1rem 0'
          }}
        >
          Maybe you’ve heard these different marketing terms, maybe you haven’t.
          Either way, let me help to clarify the difference between them,
          because you should have all three if you want to market successfully.
          And knowing what they are may be your first step to accomplishing all
          three for your business.
        </BodyText>
      </WhoBox>
    </WhoContainer>

    <StrengthsHeader>Two things that make me a natural fit</StrengthsHeader>
    <div>
      <HeaderText>PRODUCTIVITY GEEK</HeaderText>
      <BodyText>
        With the Internet spreading like wildfire and reaching every part of our
        daily life, more and more traffic is directed to websites in search for
        information. Imagine a website without any text and completely
        overloaded with pictures. Well Blogs serve as an unstoppable entity in
        today’s scenario for online promotion and branding. They are the latest
        selling mantra for websites. Many businesses, manufacturers and
        wholesalers use blogs to promote their products, services.
      </BodyText>
    </div>
    <div>
      <HeaderText>NATURAL DESIRE TO LEARN</HeaderText>
      <BodyText>
        With the Internet spreading like wildfire and reaching every part of our
        daily life, more and more traffic is directed to websites in search for
        information. Imagine a website without any text and completely
        overloaded with pictures. Well Blogs serve as an unstoppable entity in
        today’s scenario for online promotion and branding. They are the latest
        selling mantra for websites. Many businesses, manufacturers and
        wholesalers use blogs to promote their products, services.
      </BodyText>
    </div>

    <WeaknessContainer>
      <WeaknessHeader>Two things that may give you reservations</WeaknessHeader>
      <WeaknessSubtitle>...and my attempt to alleviate them</WeaknessSubtitle>
      <div style={{ display: 'flex' }}>
        <div style={{ padding: '1.25em 1.25em 0 1.25em' }}>
          <HeaderText darkBackground={true}>LACK OF EXPERIENCE</HeaderText>
          <BodyText darkBackground={true}>
            With the Internet spreading like wildfire and reaching every part of
            our daily life, more and more traffic is directed to websites in
            search for information. Imagine a website without any text and
            completely overloaded with pictures. Well Blogs serve as an
            unstoppable entity in today’s scenario for online promotion and
            branding. They are the latest selling mantra for websites. Many
            businesses, manufacturers and wholesalers use blogs to promote their
            products, services.
          </BodyText>
        </div>

        <div style={{ padding: '1.25em 1.25em 0 1.25em' }}>
          <HeaderText darkBackground={true}>LIMITED PORTFOLIO</HeaderText>
          <BodyText darkBackground={true}>
            With the Internet spreading like wildfire and reaching every part of
            our daily life, more and more traffic is directed to websites in
            search for information. Imagine a website without any text and
            completely overloaded with pictures. Well Blogs serve as an
            unstoppable entity in today’s scenario for online promotion and
            branding. They are the latest selling mantra for websites. Many
            businesses, manufacturers and wholesalers use blogs to promote their
            products, services.
          </BodyText>
        </div>
      </div>
    </WeaknessContainer>

    <ThankYou>If you have read this far, thank you. I appreciate you.</ThankYou>
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
