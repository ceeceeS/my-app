import React, { Component } from 'react';
import {
  gql,
  graphql
} from 'react-apollo';

const UsersList = ({ data: {loading, error, users }}) => {
   if (loading) {
     return <p>Loading ...</p>;
   }
   if (error) {
     return <p>{error.message}</p>;
   }

   return <ul className="list-group">
     { users.map( user => <li className="list-group-item"key={user.id}>{user.firstName}</li> ) }
   </ul>;
 };

const usersListQuery = gql`
    query getUser {getUser(id:"5a0c420503b35d249808e94e") {
        _id
        displayName
        email
        firstName
        lastName
        birthday
        cars {
          _id
          model
          registrationNo
        }
      }
    }
 `;
const UsersListWithData = graphql(usersListQuery)(UsersList);
export default UsersListWithData;
