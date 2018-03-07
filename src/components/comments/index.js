import React from 'react';
import glamorous from 'glamorous';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { PulseLoader } from 'react-spinners';
import { HeaderText, BodyText, FlexContainer, Right } from '../shared';
import CommentForm from '../comment-form';

const QUERY = gql`
  query {
    allCommentses {
      id
      name
      body
      createdAt
    }
  }
`;

const CommentContainer = glamorous.div({
  border: 'none',
  background: '#F8FAFC',
  borderRadius: '2px',
  marginTop: '2rem',
  padding: '.5rem 1.5rem .5rem 1.5rem',
  lineHeight: '1.5'
});

const Comments = () => (
  <div>
    <CommentForm refetch={QUERY} />
    <Query query={QUERY}>
      {({ loading, error, data: { allCommentses } }) => {
        if (loading)
          return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PulseLoader color={'#5661B3'} />
            </div>
          );
        if (error) return '😦';

        return allCommentses
          .map(({ id, name, body, createdAt }) => {
            return (
              <CommentContainer key={id}>
                <FlexContainer>
                  <HeaderText>{name}</HeaderText>
                  <Right>
                    <HeaderText style={{ color: '#C3CBD1' }}>
                      {new Date(createdAt).toDateString()}
                    </HeaderText>
                  </Right>
                </FlexContainer>
                <BodyText>{body}</BodyText>
              </CommentContainer>
            );
          })
          .reverse();
      }}
    </Query>
  </div>
);
export default Comments;
