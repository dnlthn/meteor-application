import React from 'react';
import {
  BodyText,
  Container,
  FlexContainer,
  Left
} from '../../components/shared';
import { gql } from 'apollo-boost';
import glamorous from 'glamorous';
import ResumeQuery from '../../components/resume-query';

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
const EducationOrExperience = ({ date, location, title, company, body }) => (
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

const SkillCategory = ({ name, list }) => (
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
        <SkillCategory key={id} name={type} list={skills} />
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

    <ResumeQuery query={INFO_QUERY}>
      {({ email, twitter, github }) => (
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
      )}
    </ResumeQuery>

    <ResumeQuery query={SKILLS_QUERY}>
      {({ skills }) => <Skills skills={skills} />}
    </ResumeQuery>

    <ResumeQuery query={EDUCATION_QUERY}>
      {({ education }) =>
        education.map(({ id, location, timeSpan, degree, name }) => (
          <EducationOrExperience
            key={id}
            date={timeSpan}
            location={location}
            title={degree}
            company={name}
          />
        ))
      }
    </ResumeQuery>

    <ResumeQuery query={EXPERIENCE_QUERY}>
      {({ experience }) =>
        experience.map(({ body, company, id, location, timeSpan, title }) => (
          <EducationOrExperience
            key={id}
            date={timeSpan}
            location={location}
            title={title}
            company={company}
            body={body}
          />
        ))
      }
    </ResumeQuery>
  </Container>
);

export default Resume;
