import React, { Component } from 'react';
import glamorous from 'glamorous';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

import PrimaryButton from '../../components/primary-button';

const addCommentMutation = gql`
  mutation addComment($name: String!, $body: String!) {
    createComments(name: $name, body: $body) {
      id
      createdAt
    }
  }
`;

const AddComment = ({ mutate, name, body, resetForm, refetch }) => {
  return (
    <PrimaryButton
      style={{
        margin: '0'
      }}
      onClick={() => {
        const commenter_name = name === '' ? 'Anonymous' : name;
        mutate({
          variables: { name: commenter_name, body },
          refetchQueries: [{ query: refetch }]
        }).then(() => resetForm());
      }}
    >
      Add Feedback
    </PrimaryButton>
  );
};
const AddCommentMutation = graphql(addCommentMutation)(AddComment);

const MAX_LETTERS = 512;

const FormContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  color: '#8795A1'
});

const NameInput = glamorous.input({
  border: 'none',
  background: '#F1F5F8',
  borderRadius: '2px',
  marginTop: '1rem ',
  padding: '1rem 1.5rem 1rem 1.5rem',
  ':focus': {
    outline: 'none'
  }
});

const MessageInput = glamorous.textarea(
  {
    border: 'none',
    background: '#F1F5F8',
    borderRadius: '2px',
    marginTop: '1rem ',
    width: '600px',
    resize: 'none',
    padding: '1rem 1.5rem 1rem 1.5rem',
    lineHeight: '1.5',
    height: '8rem',
    ':focus': {
      outline: 'none'
    }
  },
  ({ messageLength }) => {
    if (messageLength > MAX_LETTERS / 2)
      return {
        height: '16rem'
      };
  }
);
class CommentForm extends Component {
  state = {
    name: '',
    body: ''
  };

  resetForm = () => {
    this.setState({
      name: '',
      body: ''
    });
  };

  render(props) {
    const body_length = this.state.body.length;
    return (
      <FormContainer>
        <NameInput
          onChange={event => {
            this.setState({ name: event.target.value });
          }}
          value={this.state.name}
          placeholder="Anonymous"
        />
        <MessageInput
          onChange={event => {
            this.setState({ body: event.target.value });
          }}
          value={this.state.body}
          placeholder="Leave some feedback!"
          messageLength={body_length}
        />
        <div style={body_length >= MAX_LETTERS ? { color: 'red' } : {}}>
          {body_length}/512
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-end'
          }}
        >
          <AddCommentMutation
            {...this.state}
            resetForm={this.resetForm}
            {...this.props}
          />
        </div>
      </FormContainer>
    );
  }
}

export default CommentForm;
