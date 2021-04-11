import React, { Fragment } from "react";

// @material-ui
import Typography from "@material-ui/core/Typography";

// suneditor
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const TextEditor = ({ name, value, title, setForm }) => {
	const handleChange = value => setForm(prev => ({ ...prev, [name]: value }));
	return (
		<Fragment>
			<br />
			<Typography display="block" align="center" children={title} color="primary" variant="h5" />
			<br />
			<SunEditor
				setOptions={{ fullScreenOffset: 64 }}
				value={value}
				defaultValue={value}
				name={name}
				onChange={handleChange}
				height={250}
			/>
			<br />
		</Fragment>
	);
};
export default TextEditor;
