import React, { createContext, useEffect, useState } from 'react';

import { initialAuthState } from './initial-data';

const { Provider, Consumer } = createContext();

export const withAuthContext = (Component) => (props) => (
	<Consumer>{(value) => <Component {...value} {...props} />}</Consumer>
);

export function AuthProvider(props) {
	const [isLoading, setLoading] = useState(true);
	const [authState, setAuthState] = useState({ ...initialAuthState });

	const onLogout = () => setAuthState({ ...initialAuthState });

	useEffect(() => {
		// will be checking whether the user is already logged in or not
		setLoading(false);
	}, []);

	return <Provider value={{ ...authState, isLoading, setLoading, onLogout }}>{props.children}</Provider>;
}
