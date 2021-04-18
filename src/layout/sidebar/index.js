import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { withAuthContext } from '../../context/auth';

const useStyles = makeStyles({
	list: {
		width: 250
	}
});

function SideBar({ isDrawerOpen, toggleDrawer }) {
	const classes = useStyles();

	return (
		<Drawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer} variant='permanent'>
			<div className={classes.list}>
				<List>
					{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, i) => (
						<ListItem button key={text}>
							<ListItemIcon>{i % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{['All mail', 'Trash', 'Spam'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</div>
		</Drawer>
	);
}

export default withAuthContext(SideBar);
