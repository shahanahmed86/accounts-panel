import React from 'react';

// phone input
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function CustomPhoneInput({
	required = true,
	value,
	setForm,
	setSubmitted,
	disabled,
	formKey,
	label,
	countryCode,
	errorMessage
}) {
	const handleChange = (value) => {
		setForm((prev) => ({ ...prev, [formKey]: value }));
		setSubmitted((prev) => ({ ...prev, [formKey]: '' }));
	};
	return (
		<fieldset
			style={{
				borderBottom: `1px solid ${errorMessage ? 'red' : 'black'}`,
				padding: 0
			}}
		>
			<legend>{label}</legend>
			<PhoneInput
				required={required}
				international
				style={{ margin: 0, padding: '3px 0px 5px 3px', backgroundColor: 'transparent' }}
				disabled={disabled}
				defaultCountry={countryCode}
				value={value}
				onChange={handleChange}
			/>
		</fieldset>
	);
}

export default CustomPhoneInput;
