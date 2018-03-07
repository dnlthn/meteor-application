import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { PulseLoader } from 'react-spinners';
import GitHubButton from '../../components/github-button';

import { HeaderText, BodyText, FlexContainer, Right } from '../shared';

const QUERY = gql`
  query {
    allTechnologies {
      id
      name
      body
      link
    }
  }
`;

const TechUsed = ({ style }) => (
  <div style={style}>
    <Query query={QUERY}>
      {({ loading, error, data: { allTechnologies } }) => {
        if (loading)
          return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PulseLoader color={'#5661B3'} />
            </div>
          );

        if (error) return '😦';

        return allTechnologies.map(({ id, name, body, link }) => (
          <div key={id}>
            <FlexContainer>
              <HeaderText>{name}</HeaderText>
              <Right>
                <GitHubButton
                  onClick={() => {
                    window.location.href = `${link}`;
                  }}
                >
                  VIEW SOURCE
                </GitHubButton>
              </Right>
            </FlexContainer>
            <BodyText style={{ marginTop: '0' }}>{body}</BodyText>
          </div>
        ));
      }}
    </Query>
  </div>
);

export default TechUsed;
