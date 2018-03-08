import React from 'react';
import {
  HeaderText,
  FlexContainer,
  Left,
  Right
} from '../../components/shared';
import { Query } from 'react-apollo';
import { PulseLoader } from 'react-spinners';
import glamorous from 'glamorous';

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
const ResumeQuery = ({ query, children }) => {
  return (
    <FlexContainer style={{ width: '100%', marginTop: '2rem' }}>
      <Left>
        <Label title="QUICK INFO" />
      </Left>
      <Query query={query} variables={{ email: 'hey@danielthompson.io' }}>
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

          return <Right>{children(Person)} </Right>;
        }}
      </Query>
    </FlexContainer>
  );
};

export default ResumeQuery;
