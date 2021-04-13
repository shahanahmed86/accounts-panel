import React, { createContext, useEffect, useState } from 'react';

import { initialAuthState } from './initial-data';

// graphql
import { LOGIN_ADMIN, LOGIN_USER } from '../graphql';
import { useMutation } from '@apollo/client';

const { Provider, Consumer } = createContext();

export const withAuthContext = (Component) => (props) => (
	<Consumer>{(value) => <Component {...value} {...props} />}</Consumer>
);

export function AuthProvider(props) {
	const [isLoading, setLoading] = useState(true);
	const [authState, setAuthState] = useState({ ...initialAuthState });

	const onLogout = () => {
		localStorage.removeItem('token');
		setAuthState({ ...initialAuthState });
	};

	// login admin
	const [loginAdmin] = useMutation(LOGIN_ADMIN);
	const onLoginAdmin = async (variables) => {
		setLoading(true);
		try {
			const data = await loginAdmin({ variables });
			const { token, user } = data.data.login;
			localStorage.setItem('token', token);
			setAuthState({
				user,
				isLoggedIn: true,
				role: 'admin'
			});
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	// login user
	const [loginUser] = useMutation(LOGIN_USER);
	const onLoginUser = async (variables) => {
		setLoading(true);
		try {
			const data = await loginUser({ variables });
			const { token, user } = data.data.login;
			localStorage.setItem('token', token);
			setAuthState({
				user,
				isLoggedIn: true,
				role: 'user'
			});
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				const token = localStorage.getItem('token');
				if (!token) throw new Error('Token not found...');

				const response = await fetch('http://localhost:4000/auth/loggedIn', {
					headers: {
						Authorization: `Bearer ${token}`
					}
				});
				const { userType, ...user } = await response.json();
				setAuthState({
					user,
					isLoggedIn: true,
					role: userType
				});
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return (
		<Provider value={{ ...authState, setAuthState, isLoading, setLoading, onLoginAdmin, onLoginUser, onLogout }}>
			{props.children}
		</Provider>
	);
}
