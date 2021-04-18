import React, { useEffect, useState } from 'react';

// @material-ui
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const initialState = (key) => ({
	id: 'None',
	[key]: 'None'
});

function CustomSelect({
	fullWidth = true,
	required = true,
	handleChange,
	disabled,
	entityLabel,
	allEntities,
	entityKey,
	formKey,
	form,
	variant = 'outlined'
}) {
	const [entity, setEntity] = useState(initialState(entityKey));

	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	const handleChangeMenu = ({ target: { value } }) => {
		if (value !== 'None') {
			handleChange({ [formKey]: value });
		} else {
			setEntity(initialState(entityKey));
			handleChange({ [formKey]: '' });
		}
	};

	useEffect(() => {
		if (form && typeof form === 'string') {
			const selectEntity = allEntities.find((val) => val.id === form);
			setEntity({ id: selectEntity.id, [entityKey]: selectEntity[entityKey] });
		}
		return () => setEntity(initialState(entityKey));
	}, [form, setEntity, allEntities, entityKey]);

	return (
		<FormControl
			fullWidth={fullWidth}
			required={required}
			disabled={disabled}
			error={!entity[entityKey] || entity[entityKey] === 'None'}
			variant={variant}
		>
			{entityLabel && <InputLabel id='select-label'>{entityLabel}</InputLabel>}
			<Select
				labelId='select-label'
				id='demo-select'
				value={entity.id}
				open={menuOpen}
				onClose={toggleMenu}
				onOpen={toggleMenu}
				onChange={handleChangeMenu}
			>
				<MenuItem value='None'>None</MenuItem>
				{Array.isArray(allEntities) && allEntities.length
					? allEntities.map(({ id, ...rest }, i) => (
							<MenuItem key={i} value={id}>
								{rest[entityKey]}
							</MenuItem>
					  ))
					: ''}
			</Select>
		</FormControl>
	);
}

export default CustomSelect;
