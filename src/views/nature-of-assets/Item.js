import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';

function Item({ name, haveChildren, toggleExpand }) {
	const [isHovered, setHovered] = useState(false);
	const onMouseIn = () => setHovered(true);
	const onMouseOut = () => setHovered(false);
	return (
		<ListItem disableGutters classes={{ dense: 'list-item' }} onMouseEnter={onMouseIn} onMouseLeave={onMouseOut}>
			<ListItemIcon
				className='cursor-pointer'
				onClick={toggleExpand}
				classes={{
					root: 'list-item-icon'
				}}
				onMouse
			>
				{!haveChildren ? <RemoveCircleOutline htmlColor='gray' /> : <AddCircleIcon htmlColor='green' />}
			</ListItemIcon>
			<ListItemText primary={name} />
			{isHovered && (
				<ListItemSecondaryAction>
					<EditIcon className='cursor-pointer' color='primary' />
					<DeleteIcon className='cursor-pointer' style={{ marginLeft: 5 }} color='secondary' />
				</ListItemSecondaryAction>
			)}
		</ListItem>
	);
}

export default Item;
