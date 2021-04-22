import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withThemeContext } from '../../context';
import { Loader } from '../../components';

const CustomRoute = lazy(() => import('../../components/CustomRoute'));
const Dashboard = lazy(() => import('../../views/dashboard'));
const NatureOfAccounts = lazy(() => import('../../views/nature-of-assets'));
const Transactions = lazy(() => import('../../views/transactions'));
const Reports = lazy(() => import('../../views/reports'));

function MainComponent({ drawerConfig, isTablet }) {
	return (
		<div
			className='transition-apply'
			style={
				isTablet
					? {}
					: {
							marginLeft: drawerConfig.width,
							width: `calc(100% - ${drawerConfig.width}px)`
					  }
			}
		>
			<Suspense fallback={<Loader loading={true} />}>
				<Switch>
					<CustomRoute exact={true} path='/app'>
						<Dashboard />
					</CustomRoute>
					<CustomRoute exact={true} path='/app/nature-of-assets'>
						<NatureOfAccounts />
					</CustomRoute>
					<CustomRoute exact={true} path='/app/transactions'>
						<Transactions />
					</CustomRoute>
					<CustomRoute path='/app/reports'>
						<Reports />
					</CustomRoute>
					<Route render={() => <Redirect to='/app' />} />
				</Switch>
			</Suspense>
		</div>
	);
}

export default withThemeContext(MainComponent);
