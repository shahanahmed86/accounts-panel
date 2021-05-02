import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory, useLocation } from 'react-router';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import './index.scss';

function Navigation({ items, title, path, Icon, isExpand, toggleExpand }) {
	const history = useHistory();
	const location = useLocation();

	const onClickItem = () => {
		if (items) toggleExpand();
		else history.push(path);
	};
	return (
		<ListItem
			button
			onClick={onClickItem}
			selected={location.pathname === path}
			classes={{ selected: 'nav-item-selected' }}
			className='nav-item'
		>
			<ListItemIcon>{Icon && <Icon />}</ListItemIcon>
			<ListItemText primary={title} />
			{items && (isExpand > -1 ? <ExpandLess /> : <ExpandMore />)}
		</ListItem>
	);
}

export default Navigation;
