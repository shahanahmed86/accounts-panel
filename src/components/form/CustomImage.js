import React from 'react';

// @material-ui
import FormControl from '@material-ui/core/FormControl';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Icon from '@material-ui/core/Icon';
import BackupIcon from '@material-ui/icons/Backup';
import FormHelperText from '@material-ui/core/FormHelperText';
import red from '@material-ui/core/colors/red';

// styling
import clsx from 'clsx';

// utils
import { dataURLtoFile, resizeImage } from '../../utils';

function Image({ disabled, form, formKey, formLabel, title, setForm }) {
	const classes = useStyles();

	async function handleChange({ target: { name, files } }) {
		if (!files[0]) return;

		try {
			// scaling up image
			const url = await resizeImage(files[0]);
			const file = dataURLtoFile(url, files[0].name);

			// saving into the state
			setForm((prev) => ({ ...prev, [name]: { url, file } }));
		} catch (error) {
			console.error('catch fileUpload error', { error });
		}
	}
	function handleDeleteImages(name) {
		setForm((prev) => ({ ...prev, [name]: { file: null, url: '' } }));
	}
	return (
		<FormControl>
			<br />
			{form[formKey].file ? (
				<div tabIndex={0} className={clsx(classes.productImageItem)}>
					{!disabled && (
						<Icon className={classes.productImageFeaturedStar} onClick={() => handleDeleteImages(formKey)}>
							delete_icon
						</Icon>
					)}
					<img src={form[formKey].url} alt={form[formLabel]} />
				</div>
			) : (
				<label htmlFor='button-file-1' className={clsx(classes.productImageUpload)}>
					<input
						disabled={disabled}
						accept='image/*'
						className='hidden'
						id='button-file-1'
						name={formKey}
						type='file'
						onChange={handleChange}
					/>
					<BackupIcon fontSize='large' color='secondary' />
				</label>
			)}
			<FormHelperText style={{ textAlign: 'center', color: 'black' }} variant='outlined'>
				{title}
			</FormHelperText>
			<br />
		</FormControl>
	);
}

export default Image;

const useStyles = makeStyles((theme) => ({
	productImageFeaturedStar: {
		cursor: 'pointer',
		position: 'absolute',
		top: 'calc(50% - 12px)',
		right: 'calc(50% - 12px)',
		color: red[400],
		opacity: 0
	},
	productImageUpload: {
		width: 200,
		height: 200,
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut
	},
	productImageItem: {
		width: 200,
		height: 200,
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			position: 'relative',
			'&:before': {
				position: 'absolute',
				content: '""',
				background: 'black',
				height: '100%',
				width: '100%',
				opacity: 0.5
			},
			'& $productImageFeaturedStar': {
				opacity: 0.8
			}
		},
		'&.featured': {
			pointerEvents: 'none',
			boxShadow: theme.shadows[3],
			'& $productImageFeaturedStar': {
				opacity: 1
			},
			'&:hover $productImageFeaturedStar': {
				opacity: 1
			}
		}
	}
}));
