import React from 'react';
import { gql } from 'apollo-boost';

import glamorous from 'glamorous';
import { Container, FlexContainer, Left } from '../../components/shared';
import EducationOrExperience from '../../components/education-or-experience';

import ResumeQuery from '../../components/resume-query';
import Skills from '../../components/skills';
import QuickInfo from '../../components/quick-info';

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

    <ResumeQuery query={INFO_QUERY} sectionTitle="QUICK INFO">
      {props => <QuickInfo {...props} />}
    </ResumeQuery>

    <ResumeQuery
      query={SKILLS_QUERY}
      sectionTitle="SKILLS"
      sectionSubtitle="or tech I use day to day"
    >
      {props => <Skills {...props} />}
    </ResumeQuery>

    <ResumeQuery query={EDUCATION_QUERY} sectionTitle="EDUCATION">
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

    <ResumeQuery query={EXPERIENCE_QUERY} sectionTitle="EXPERIENCE">
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
