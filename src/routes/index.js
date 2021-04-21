import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ReportIcon from '@material-ui/icons/Report';

const routes = [
	{
		path: '/app',
		exact: true,
		Icon: (props) => <DashboardIcon {...props} />,
		title: 'Dashboard',
		items: null
	},
	{
		path: '/app/nature-of-assets',
		exact: true,
		Icon: (props) => <MonetizationOnIcon {...props} />,
		title: 'Nature of Assets',
		items: null
	},
	{
		path: '/app/transactions',
		exact: true,
		Icon: (props) => <AccountBalanceIcon {...props} />,
		title: 'Transactions',
		items: null
	},
	{
		path: '/app/reports',
		exact: true,
		Icon: (props) => <AssessmentIcon {...props} />,
		title: 'Reports',
		items: [
			{
				path: '/app/reports/ledger',
				exact: true,
				Icon: (props) => <ReportIcon {...props} />,
				title: 'Ledger',
				items: null
			}
		]
	}
];

export default routes;
