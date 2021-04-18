import React from 'react';

import { withAuthContext } from '../../context';

function Dashboard({ role, isLoading }) {
	if (isLoading) return '';
	return (
		<div>
			<h3>Dashboard page for {role}</h3>
		</div>
	);
}

export default withAuthContext(Dashboard);
