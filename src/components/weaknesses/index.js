import React from 'react';
import glamorous from 'glamorous';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { PulseLoader } from 'react-spinners';

import { HeaderText, BodyText } from '../shared';

const Container = glamorous.div({
  background: '#2F365F',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.20)',
  borderRadius: '2px',
  color: '#E6E8FF',
  padding: '2rem',
  margin: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const Header = glamorous.div({
  fontWeight: '200',
  fontSize: '1.875rem',
  lineHeight: '1.125'
});

const Subtitle = glamorous.div({
  fontSize: '1.625rem',
  fontWeight: '600'
});

const QUERY = gql`
  query GetPerson($email: String!, $type: TraitType!) {
    Person(email: $email) {
      personality(filter: { type: $type }) {
        id
        title
        body
      }
    }
  }
`;
const Weaknesses = ({ style }) => (
  <div style={style}>
    <Container>
      <Header>Two things that may give you reservations</Header>
      <Subtitle>...and my attempt to alleviate them</Subtitle>
      <div style={{ display: 'flex' }}>
        <Query
          query={QUERY}
          variables={{ email: 'hey@danielthompson.io', type: 'Weakness' }}
        >
          {({ loading, error, data: { Person } }) => {
            if (loading)
              return (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '2rem'
                  }}
                >
                  <PulseLoader color={'#E6E8FF'} />
                </div>
              );

            if (error) return '😦';

            return Person.personality.map(({ id, title, body }) => (
              <div key={id} style={{ padding: '1.25em 1.25em 0 1.25em' }}>
                <HeaderText darkBackground={true}>{title}</HeaderText>
                {body.map(paragraph => (
                  <BodyText darkBackground={true}>{paragraph}</BodyText>
                ))}
              </div>
            ));
          }}
        </Query>
      </div>
    </Container>
  </div>
);

export default Weaknesses;
