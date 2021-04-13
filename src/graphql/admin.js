import gql from 'graphql-tag';

export const LOGIN_ADMIN = gql`
	mutation($username: String!, $password: String!) {
		login: loginAdmin(username: $username, password: $password) {
			token
			user {
				id
				username
				password
				createdAt
				updatedAt
			}
		}
	}
`;

export const LOGGED_IN_ADMIN = gql`
	query {
		loggedInAdmin {
			id
			username
			password
			createdAt
			updatedAt
		}
	}
`;
