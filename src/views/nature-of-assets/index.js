import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Item from './Item';
import clsx from 'clsx';
import initialState from './data';
import './index.scss';

function NatureOfAssets() {
	const classes = useStyles();

	const [accounts] = useState([...initialState]);

	const renderList = (account, haveChildren) => (
		<List dense key={account.id} className={clsx({ 'list-wrapper': haveChildren })}>
			<Item {...account} haveChildren={haveChildren} />
			{Array.isArray(account.children)
				? account.children.map((account) => renderList(account, !!account.children.length))
				: null}
		</List>
	);

	return (
		<div className={classes.root}>
			<Typography variant='h6' className={classes.title} children='Nature of Accounts' />
			<div className={classes.demo}>
				{accounts.map((account) => renderList(account, Array.isArray(account.children) && !!account.children.length))}
			</div>
		</div>
	);
}

export default NatureOfAssets;

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		maxWidth: 400,
		margin: 'auto'
	},
	demo: {
		backgroundColor: theme.palette.background.paper
	},
	title: {
		margin: theme.spacing(4, 0, 2)
	}
}));
