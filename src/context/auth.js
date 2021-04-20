import React, { createContext, useEffect, useState } from 'react';

// initial-state
import { initialAuthState } from './initial-data';

// graphql
import { ACCOUNT_SIGN_OUT, ADMIN_SIGN_OUT, LOGIN_ADMIN, LOGIN_USER } from '../graphql';
import { useMutation } from '@apollo/client';

// utils
import { toastError } from '../utils/logics';

const { Provider, Consumer } = createContext();

export const withAuthContext = (Component) => (props) => (
	<Consumer>{(value) => <Component {...value} {...props} />}</Consumer>
);

export const AuthProvider = function (props) {
	const [isLoading, setLoading] = useState(true);
	const [authState, setAuthState] = useState({ ...initialAuthState });

	// logout
	const [adminSignOut] = useMutation(ADMIN_SIGN_OUT);
	const [accountSignOut] = useMutation(ACCOUNT_SIGN_OUT);
	const onLogout = async () => {
		setLoading(true);
		try {
			if (authState.role === 'admin') await adminSignOut();
			if (authState.role === 'account') await accountSignOut();
			setAuthState({ ...initialAuthState });
		} catch (error) {
			console.error(error);
			toastError(error.message);
		} finally {
			setLoading(false);
		}
	};

	// login admin
	const [loginAdmin] = useMutation(LOGIN_ADMIN);
	const onLoginAdmin = async (variables) => {
		setLoading(true);
		try {
			const data = await loginAdmin({ variables });
			const { role, ...user } = data.data.login;
			setAuthState({
				user,
				isLoggedIn: true,
				role
			});
		} catch (error) {
			console.error(error);
			toastError(error.message);
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
			const { role, ...user } = data.data.login;
			setAuthState({
				user,
				isLoggedIn: true,
				role
			});
		} catch (error) {
			console.error(error);
			toastError(error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				const response = await fetch('/auth/loggedIn', {
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json'
					}
				});
				const { role, ...user } = await response.json();
				setAuthState({
					user,
					isLoggedIn: true,
					role
				});
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return (
		<Provider
			value={{
				...authState,
				setAuthState,
				isLoading,
				setLoading,
				onLoginAdmin,
				onLoginUser,
				onLogout
			}}
		>
			{props.children}
		</Provider>
	);
};
