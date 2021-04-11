import React, { Suspense, lazy } from 'react';

// css
import './App.css';

// react-router-dom
import { Switch, Route, Redirect } from 'react-router-dom';

// context
import { withAuthContext } from './context';

// reusable
import { Loader } from './reusable';

// reusable with lazy effect
const CustomRoute = lazy(() => import('./reusable/CustomRoute'));
const Login = lazy(() => import('./components/Login'));
const Dashboard = lazy(() => import('./components/Dashboard'));

function App({ isLoading }) {
	return (
		<Suspense fallback={<Loader loading={true} />}>
			<Switch>
				<CustomRoute exact={true} path='/login' isPrivate={false}>
					<Login />
				</CustomRoute>

				<CustomRoute path='/dashboard'>
					<Dashboard />
				</CustomRoute>

				<Route render={() => <Redirect to='/login' />} />
			</Switch>
			<Loader loading={isLoading} />
		</Suspense>
	);
}

export default withAuthContext(App);
