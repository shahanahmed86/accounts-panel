import gql from 'graphql-tag';

export const LOGIN_ADMIN = gql`
	mutation($username: String!, $password: String!) {
		login: loginAdmin(username: $username, password: $password) {
			id
			username
			password
			role
			createdAt
			updatedAt
		}
	}
`;

export const LOGGED_IN_ADMIN = gql`
	query {
		loggedInAdmin {
			id
			username
			password
			role
			createdAt
			updatedAt
		}
	}
`;

export const ADMIN_SIGN_OUT = gql`
	mutation {
		adminSignOut
	}
`;
