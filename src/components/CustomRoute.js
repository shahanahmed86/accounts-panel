import React, { useEffect } from 'react';
import { Route, useHistory, useRouteMatch } from 'react-router-dom';

import { withAuthContext } from '../context';

function CustomRoute({ isPrivate = true, isLoggedIn, role, isLoading, exact = false, path, ...props }) {
	const history = useHistory();
	const login = useRouteMatch('/login');

	useEffect(() => {
		if (!isLoading) {
			if (isLoggedIn) {
				// if ((!isPrivate && login) || (isPrivate && currentRoute && isAdminRoute && role !== 'admin')) {}
				if (!isPrivate && login) history.push('/app');
			}
			if (!isLoggedIn && isPrivate) history.push('/login');
		}
	}, [login, isLoggedIn, history, isPrivate, isLoading, role]);

	return (
		<Route exact={exact} path={path}>
			{props.children}
		</Route>
	);
}

export default withAuthContext(CustomRoute);
