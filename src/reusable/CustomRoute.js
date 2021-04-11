import React, { useEffect } from 'react';

// react-router-dom
import { Route, useHistory, useRouteMatch } from 'react-router-dom';

import { withAuthContext } from '../context';

function CustomRoute({ isPrivate = true, isLoggedIn, exact = false, path, ...props }) {
	const history = useHistory();
	const login = useRouteMatch('/login');

	useEffect(() => {
		if (isLoggedIn && !isPrivate && (login || login.isExact)) history.push('/dashboard');

		if (!isLoggedIn && isPrivate) history.push('/login');
	}, [login, isLoggedIn, history, isPrivate]);

	return (
		<Route exact={exact} path={path}>
			{props.children}
		</Route>
	);
}

export default withAuthContext(CustomRoute);
