import gql from 'graphql-tag';

export const LOGIN_USER = gql`
	mutation($username: String!, $password: String!) {
		loginAccount(username: $username, password: $password) {
			token
			user {
				id
				username
				password
				name
				avatar
				createdAt
				updatedAt
			}
		}
	}
`;

export const LOGGED_IN_USER = gql`
	query {
		loggedInAccount {
			id
			username
			password
			name
			avatar
			createdAt
			updatedAt
		}
	}
`;
