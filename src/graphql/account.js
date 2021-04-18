import gql from 'graphql-tag';

export const LOGIN_USER = gql`
	mutation($username: String!, $password: String!) {
		login: loginAccount(username: $username, password: $password) {
			id
			username
			password
			name
			avatar
			role
			createdAt
			updatedAt
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
			role
			createdAt
			updatedAt
		}
	}
`;

export const ACCOUNT_SIGN_OUT = gql`
	mutation {
		accountSignOut
	}
`;
