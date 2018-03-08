import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { PulseLoader } from 'react-spinners';

import { HeaderText, BodyText, SectionIntro } from '../shared';

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
    <SectionIntro>Two things that make me a natural fit</SectionIntro>
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
          <div key={id} style={{ marginTop: '2em' }}>
            <HeaderText>{title}</HeaderText>
            {body.map(paragraph => <BodyText>{paragraph}</BodyText>)}
          </div>
        ));
      }}
    </Query>
  </div>
);

export default Strengths;
