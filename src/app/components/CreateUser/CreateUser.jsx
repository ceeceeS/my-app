import React, { Component } from 'react';
import {
  gql,
  graphql
} from 'react-apollo';

const CreateUser = ({mutate}) => {
    const handleKeyUp = (evt) => {
      if (evt.keyCode === 13) {
        evt.persist();
        mutate({
          variables: { name: evt.target.value }
        })
        .then( res => {
          evt.target.value = '';
        });
      }
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder="New user"
      onKeyUp={handleKeyUp}
    />
  );
};

const CreateUserMutation = gql`
  mutation addUser($firstName: String!) {
    addUser(firstName: $firstName) {
      id
      firstName
    }
  }
`;

const CreateUserWithMutation = graphql(
  CreateUserMutation
)(CreateUser);

export default CreateUserWithMutation;
