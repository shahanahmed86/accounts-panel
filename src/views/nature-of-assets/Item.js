import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';

function Item({ name, haveChildren, ...props }) {
	console.log(props);
	const [isExpanded, setExpanded] = useState(false);
	const toggleExpanded = () => setExpanded((prev) => !prev);
	return (
		<ListItem disableGutters classes={{ dense: 'list-item' }}>
			<ListItemIcon
				className='cursor-pointer'
				onClick={toggleExpanded}
				classes={{
					root: 'list-item-icon'
				}}
			>
				{isExpanded && !haveChildren ? <RemoveCircleOutline htmlColor='gray' /> : <AddCircleIcon htmlColor='green' />}
			</ListItemIcon>
			<ListItemText primary={name} />
			<ListItemSecondaryAction>
				<EditIcon className='cursor-pointer' color='primary' />
				<DeleteIcon className='cursor-pointer' style={{ marginLeft: 5 }} color='secondary' />
			</ListItemSecondaryAction>
		</ListItem>
	);
}

export default Item;
