import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Loader } from '../../components';
const CustomRoute = lazy(() => import('../../components/CustomRoute'));

function Reports() {
	return (
		<Suspense fallback={<Loader loading={true} />}>
			<Switch>
				<CustomRoute exact={true} path='/app/reports/trial'>
					<h3>Trial Balance</h3>
				</CustomRoute>
				<CustomRoute exact={true} path='/app/reports/ledger'>
					<h3>Ledger Balance</h3>
				</CustomRoute>
				<Route render={() => <Redirect to='/app/reports/trial' />} />
			</Switch>
		</Suspense>
	);
}

export default Reports;
