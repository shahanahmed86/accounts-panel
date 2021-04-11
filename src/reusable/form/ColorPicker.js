import React from "react";

// color picker
import { SketchPicker } from "react-color";

// @maerial-ui
import FormHelperText from "@material-ui/core/FormHelperText";

function ColorPicker({ title, formKey, value, setForm }) {
	const handleChange = color => setForm(prev => ({ ...prev, [formKey]: color.hex }));
	return (
		<div style={{ width: "fit-content" }}>
			<SketchPicker color={value} onChangeComplete={handleChange} />
			<FormHelperText style={{ textAlign: "center", color: "black" }} variant="outlined">
				{title}
			</FormHelperText>
		</div>
	);
}

export default ColorPicker;
