import React from 'react';

import { withAuthContext } from '../context';

function Dashboard({ onLogout }) {
	return (
		<div>
			<h3>Dashboard page</h3>
			<button onClick={onLogout}>Logout</button>
		</div>
	);
}

export default withAuthContext(Dashboard);
