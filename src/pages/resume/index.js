import React from 'react';
import {
  HeaderText,
  BodyText,
  Container,
  FlexContainer,
  Left,
  Right
} from '../../components/shared';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { PulseLoader } from 'react-spinners';
import glamorous from 'glamorous';

const Name = glamorous.h1({
  fontWeight: '200',
  fontSize: '3rem',
  color: '#3D4852',
  margin: '0',
  padding: '0',
  marginBottom: '.75rem'
});

const Statement = glamorous.h2({
  fontWeight: '200',
  fontSize: '1.5rem',
  color: '#2F365F',
  margin: '0',
  padding: '0',
  lineHeight: '1.25',
  maxWidth: '700px'
});
const Title = glamorous.span({
  fontWeight: '600'
});

const LighterText = glamorous.p({
  margin: '0',
  padding: '0',
  color: '#8795A1'
});

const TitleText = glamorous.p({
  margin: '0',
  padding: '0',
  fontSize: '1.5rem',
  color: '#22292F'
});

const EXPERIENCE_QUERY = gql`
  query getPersonExperience($email: String!) {
    Person(email: $email) {
      experience {
        id
        title
        company
        location
        timeSpan
        body
      }
    }
  }
`;

const SKILLS_QUERY = gql`
  query getPersonExperience($email: String!) {
    Person(email: $email) {
      skills {
        id
        name
        type
      }
    }
  }
`;

const EDUCATION_QUERY = gql`
  query getPersonExperience($email: String!) {
    Person(email: $email) {
      education {
        id
        degree
        name
        location
        timeSpan
      }
    }
  }
`;
const INFO_QUERY = gql`
  query getPersonInfo($email: String!) {
    Person(email: $email) {
      email
      twitter
      github
    }
  }
`;
const Content = ({ date, location, title, company, body }) => (
  <div
    style={{
      padding: '0 0 0 1.25em',
      borderLeft: '3px solid #5661B3',
      lineHeight: '1.5',
      width: '650px'
    }}
  >
    <LighterText>{`${date} | ${location}`}</LighterText>
    <TitleText>{title}</TitleText>
    <LighterText>{company}</LighterText>
    {body && <BodyText>{body}</BodyText>}
  </div>
);

const SubtitleText = glamorous.h6({
  fontSize: '1rem',
  fontWeight: '400',
  color: '#8795A1',
  margin: '0',
  padding: '0',
  fontStyle: 'italic'
});

const Label = ({ title, subtitle }) => (
  <div>
    <HeaderText style={{ margin: '0', padding: '0' }}>{title}</HeaderText>
    {subtitle && <SubtitleText>{subtitle}</SubtitleText>}
  </div>
);

const Category = ({ name, list }) => (
  <div style={{ marginBottom: '1rem' }}>
    <span style={{ fontWeight: '600' }}>{name}</span>
    <span style={{ fontWeight: '200' }}>
      {list.map((skill, i) => ` ${skill}${i < list.length - 1 ? ',' : ''}`)}
    </span>
  </div>
);
const Skills = ({ skills }) => {
  const categorized = skills.reduce((map, { id, type, name }) => {
    if (!map[type]) map[type] = { id, skills: [] };
    map[type].skills = [...map[type].skills, name];
    return map;
  }, {});
  return (
    <div
      style={{
        padding: '0 0 0 1.25em',
        borderLeft: '3px solid #5661B3',
        lineHeight: '1.5',
        width: '650px'
      }}
    >
      {Object.entries(categorized).map(([type, { id, skills }]) => (
        <Category key={id} name={type} list={skills} />
      ))}
    </div>
  );
};
const Resume = () => (
  <Container>
    <FlexContainer style={{ width: '100%' }}>
      <Left>
        <div>
          <Name>Daniel Thompson</Name>
          <Statement>
            I am a <Title>software developer</Title> with a specialization in{' '}
            <Title>web technologies</Title> currently in the process of
            relocating from Houston to Austin, TX.
          </Statement>
        </div>
      </Left>
    </FlexContainer>

    <FlexContainer style={{ width: '100%', marginTop: '2rem' }}>
      <Left>
        <Label title="QUICK INFO" />
      </Left>
      <Query query={INFO_QUERY} variables={{ email: 'hey@danielthompson.io' }}>
        {({ loading, error, data: { Person } }) => {
          if (loading)
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flex: '1 0 auto'
                }}
              >
                <PulseLoader color={'#5661B3'} />
              </div>
            );

          const { email, twitter, github } = Person;
          return (
            <Right>
              <div
                style={{
                  padding: '0 0 0 1.25em',
                  borderLeft: '3px solid #5661B3',
                  lineHeight: '1.5',
                  width: '650px'
                }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontWeight: '600' }}>Email </span>
                  <span style={{ fontWeight: '200' }}>{email}</span>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontWeight: '600' }}>Twitter </span>
                  <span style={{ fontWeight: '200' }}>{twitter}</span>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontWeight: '600' }}>GitHub </span>
                  <span style={{ fontWeight: '200' }}>{github}</span>
                </div>
              </div>
            </Right>
          );
        }}
      </Query>
    </FlexContainer>

    <FlexContainer style={{ width: '100%', marginTop: '2rem' }}>
      <Left>
        <Label title="Skills" subtitle="or tech I use day to day" />
      </Left>
      <Query
        query={SKILLS_QUERY}
        variables={{ email: 'hey@danielthompson.io' }}
      >
        {({ loading, error, data: { Person } }) => {
          if (loading)
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flex: '1 0 auto'
                }}
              >
                <PulseLoader color={'#5661B3'} />
              </div>
            );

          const { skills } = Person;
          return (
            <Right>
              <Skills skills={skills} />
            </Right>
          );
        }}
      </Query>
    </FlexContainer>

    <FlexContainer style={{ width: '100%', marginTop: '2rem' }}>
      <Left>
        <Label title="Education" />
      </Left>
      <Query
        query={EDUCATION_QUERY}
        variables={{ email: 'hey@danielthompson.io' }}
      >
        {({ loading, error, data: { Person } }) => {
          if (loading)
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flex: '1 0 auto'
                }}
              >
                <PulseLoader color={'#5661B3'} />
              </div>
            );

          const { education } = Person;
          return (
            <Right>
              {education.map(({ id, location, timeSpan, degree, name }) => (
                <Content
                  key={id}
                  date={timeSpan}
                  location={location}
                  title={degree}
                  company={name}
                />
              ))}
            </Right>
          );
        }}
      </Query>
    </FlexContainer>

    <FlexContainer style={{ width: '100%', marginTop: '2rem' }}>
      <Left>
        <Label title="Experience" />
      </Left>
      <Query
        query={EXPERIENCE_QUERY}
        variables={{ email: 'hey@danielthompson.io' }}
      >
        {({ loading, error, data: { Person } }) => {
          if (loading)
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flex: '1 0 auto'
                }}
              >
                <PulseLoader color={'#5661B3'} />
              </div>
            );

          const { experience } = Person;
          return (
            <Right>
              {experience.map(
                ({ body, company, id, location, timeSpan, title }) => (
                  <Content
                    key={id}
                    date={timeSpan}
                    location={location}
                    title={title}
                    company={company}
                    body={body}
                  />
                )
              )}
            </Right>
          );
        }}
      </Query>
    </FlexContainer>
  </Container>
);

export default Resume;
