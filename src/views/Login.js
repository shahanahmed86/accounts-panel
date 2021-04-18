import React, { useEffect, useState } from 'react';

// @material-ui/core
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

// @material-ui/icons
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// reusable
import { Copyright, CustomTextField, CustomCheckbox } from '../components';

// context
import { withAuthContext } from '../context';

const initialState = {
	username: '',
	password: ''
};

function Login({ onLoginAdmin, onLoginUser }) {
	const classes = useStyles();

	const [form, setForm] = useState({ ...initialState });
	const onFormChange = ({ target: { name, value } }) => {
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const [isAdmin, setAdmin] = useState(false);
	const toggleAdmin = ({ target: { checked } }) => setAdmin(checked);

	const onSubmitHanlder = (ev) => {
		if (ev && ev.preventDefault) ev.preventDefault();

		if (!Object.values(form).every((n) => n.trim())) {
			return console.log('form was not properly filled...');
		}
		if (isAdmin) onLoginAdmin(form);
		else onLoginUser(form);
	};

	useEffect(() => {
		return () => {
			setForm({ ...initialState });
			setAdmin(false);
		};
	}, []);

	return (
		<Grid container component='main' className={classes.root} justify='center'>
			<CssBaseline />
			<Grid item xs={false} sm={6} md={7} className={classes.image} />
			<Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square container alignItems='center'>
				<div className={classes.paper}>
					<Typography variant='h6' color='primary' children='Accounts Management System' gutterBottom />
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5' children='Sign In' />
					<form className={classes.form} onSubmit={onSubmitHanlder}>
						<CustomTextField
							// disabled={logging}
							formKey='username'
							formValue={form.username}
							handleChange={onFormChange}
							label='Username'
							autoFocus={true}
						/>
						<div />
						<br />
						<CustomTextField
							type='password'
							// disabled={logging}
							formKey='password'
							formValue={form.password}
							handleChange={onFormChange}
							label='Password'
						/>
						<CustomCheckbox label='Login as admin' handleChange={toggleAdmin} formKey='isAdmin' formValue={isAdmin} />
						<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
							Sign In
						</Button>
						<Grid item xs>
							<Grid container>
								<Link href='#' variant='body2' className='cursor-pointer'>
									Forgot password?
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}

export default withAuthContext(Login);

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh'
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.up('xl')]: {
			margin: 'auto'
		}
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));
