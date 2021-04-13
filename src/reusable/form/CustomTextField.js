import React, { useState } from 'react';

// @material-ui
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

function CustomTextField({
	autoFocus = false,
	fullWidth = true,
	required = true,
	type = 'text',
	disabled,
	handleChange,
	formKey,
	formValue,
	label,
	variant = 'outlined'
}) {
	const [showPassword, setShowPassword] = useState(false);
	const toggleShowPassword = () => setShowPassword(!showPassword);
	const InputProps = {
		endAdornment: (
			<InputAdornment position='end'>
				<IconButton color={showPassword ? 'secondary' : 'primary'} onClick={toggleShowPassword} edge='end'>
					{showPassword ? <Visibility /> : <VisibilityOff />}
				</IconButton>
			</InputAdornment>
		)
	};
	return (
		<TextField
			required={required}
			autoFocus={autoFocus}
			fullWidth={fullWidth}
			type={type !== 'password' ? type : !showPassword ? type : 'text'}
			disabled={disabled}
			name={formKey}
			onChange={handleChange}
			label={label}
			value={formValue}
			variant={variant}
			InputProps={type === 'password' ? InputProps : {}}
		/>
	);
}

export default CustomTextField;
