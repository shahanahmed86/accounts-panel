import React from 'react';

// @material-ui/core
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright({ website = 'your website', linkHref = 'https://material-ui.com/' }) {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href={linkHref}>
				{website}
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default Copyright;
