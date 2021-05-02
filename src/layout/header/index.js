import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withThemeContext } from '../../context';
import './index.scss';

function Header({ drawerConfig, toggleDrawer, isTablet, onLogout }) {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleMenu = (event) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

	return (
		<div
			className={`transition-apply ${classes.root} header`}
			style={
				isTablet
					? {}
					: {
							marginLeft: drawerConfig.width,
							width: `calc(100% - ${drawerConfig.width}px)`
					  }
			}
		>
			<AppBar position='static' elevation={0} color='inherit'>
				<Toolbar>
					{isTablet && (
						<IconButton edge='start' className={classes.menuButton} aria-label='menu' onClick={toggleDrawer}>
							<MenuIcon />
						</IconButton>
					)}
					<Typography variant='h6' className={classes.title} color='primary' children='Photos' />
					<div>
						<IconButton
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleMenu}
						>
							<AccountCircle />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							open={open}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							<MenuItem onClick={onLogout}>Sign Out</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default withThemeContext(Header);

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));
