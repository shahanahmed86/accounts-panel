import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { withThemeContext } from '../../context';

function SideBar({ drawerConfig, toggleDrawer, width }) {
	return (
		<Drawer
			anchor='left'
			open={drawerConfig.isOpen}
			onClose={toggleDrawer}
			variant={drawerConfig.variant}
			transitionDuration={500}
		>
			<div style={{ width: drawerConfig.width }} className='transition-apply no-wrap'>
				<div style={{ height: width === 'xs' ? 55 : 63 }} className='display-flex align-flex-center justify-flex-end'>
					{width !== 'xs' && width !== 'sm' && (
						<IconButton edge='start' color='inherit' aria-label='menu' onClick={toggleDrawer}>
							{drawerConfig.isOpen ? <MenuOpenIcon /> : <MenuIcon />}
						</IconButton>
					)}
				</div>
				<Divider />
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

export default withThemeContext(SideBar);
