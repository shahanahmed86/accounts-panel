import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AssessmentIcon from '@material-ui/icons/Assessment';

const routes = [
	{
		path: '/app',
		exact: true,
		Icon: (props) => <DashboardIcon {...props} />,
		title: 'Dashboard',
		isAdminRoute: false
	},
	{
		path: '/app/nature-of-assets',
		exact: true,
		Icon: (props) => <MonetizationOnIcon {...props} />,
		title: 'Nature of Assets',
		isAdminRoute: false
	},
	{
		path: '/app/transactions',
		exact: true,
		Icon: (props) => <AccountBalanceIcon {...props} />,
		title: 'Transactions',
		isAdminRoute: true
	},
	{
		path: '/app/reports',
		exact: true,
		Icon: (props) => <AssessmentIcon {...props} />,
		title: 'Reports',
		isAdminRoute: false,
		items: [
			{
				path: '/app/reports/trial',
				exact: true,
				Icon: null,
				title: 'Trial Balance',
				isAdminRoute: false
			},
			{
				path: '/app/reports/ledger',
				exact: true,
				Icon: null,
				title: 'Ledger',
				isAdminRoute: false
			}
		]
	}
];

export default routes;
