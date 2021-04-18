import React from 'react';

// @material-ui
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function CustomCheckbox({ label, formValue, formKey, handleChange }) {
	return (
		<FormControlLabel
			control={<Checkbox color='primary' checked={formValue} name={formKey} onChange={handleChange} />}
			label={label}
			labelPlacement='end'
		/>
	);
}

export default CustomCheckbox;
