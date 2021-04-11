import React from 'react';

// @material-ui
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
	root: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff'
	}
}));

function Loader({ loading }) {
	const classes = useStyles();
	return (
		<Backdrop className={classes.root} open={loading}>
			<CircularProgress color='inherit' />
		</Backdrop>
	);
}

export default Loader;
