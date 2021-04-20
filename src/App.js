import React, { Suspense, lazy } from 'react';

// scss
import './App.scss';

// react-router-dom
import { Switch, Route, Redirect } from 'react-router-dom';

// context
import { ThemeProvider, withAuthContext } from './context';

// reusable
import { Loader } from './components';

// toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// reusable with lazy effect
const CustomRoute = lazy(() => import('./components/CustomRoute'));
const Login = lazy(() => import('./views/Login'));
const Layout = lazy(() => import('./layout'));

function App({ isLoading }) {
	return (
		<Suspense fallback={<Loader loading={true} />}>
			<Switch>
				<CustomRoute exact={true} path='/login' isPrivate={false}>
					<Login />
				</CustomRoute>

				<CustomRoute path='/app'>
					<ThemeProvider>
						<Layout />
					</ThemeProvider>
				</CustomRoute>

				<Route render={() => <Redirect to='/login' />} />
			</Switch>
			<Loader loading={isLoading} />
			<ToastContainer />
		</Suspense>
	);
}

export default withAuthContext(App);
