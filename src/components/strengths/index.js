import React from 'react';
import glamorous from 'glamorous';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { PulseLoader } from 'react-spinners';

import { HeaderText, BodyText } from '../shared';

const StrengthsHeader = glamorous.h1({
  fontWeight: '200',
  fontSize: '1.875rem',
  color: '#4A4A4A',
  textAlign: 'center'
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
const Strengths = ({ style }) => (
  <div style={style}>
    <StrengthsHeader>Two things that make me a natural fit</StrengthsHeader>
    <Query
      query={QUERY}
      variables={{ email: 'hey@danielthompson.io', type: 'Strength' }}
    >
      {({ loading, error, data: { Person } }) => {
        if (loading)
          return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PulseLoader color={'#5661B3'} />
            </div>
          );
        if (error) return '😦';
        return Person.personality.map(({ id, title, body }) => (
          <div key={id}>
            <HeaderText>{title}</HeaderText>
            <BodyText>{body}</BodyText>
          </div>
        ));
      }}
    </Query>
  </div>
);

export default Strengths;
