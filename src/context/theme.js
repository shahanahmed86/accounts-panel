import React, { createContext, useEffect, useState } from 'react';

// material-ui
import withWidth from '@material-ui/core/withWidth';

// context
import { withAuthContext } from './auth';

// initial data
import { initialDrawerConfig } from './initial-data';

const { Provider, Consumer } = createContext();

export const withThemeContext = (Component) => (props) => (
	<Consumer>{(value) => <Component {...value} {...props} />}</Consumer>
);

export const ThemeProvider = withWidth()(
	withAuthContext(function ({ width, ...props }) {
		const [drawerConfig, setDrawerConfig] = useState({ ...initialDrawerConfig });
		const toggleDrawer = () => {
			setDrawerConfig((prev) => ({ ...prev, isOpen: !prev.isOpen }));
		};

		useEffect(() => {
			if (width === 'xs' || width === 'sm') {
				setDrawerConfig((prev) => ({ ...prev, width: 250, variant: 'temporary' }));
			}
			if (width === 'md' || width === 'lg' || width === 'xl') {
				setDrawerConfig((prev) => ({ ...prev, width: prev.isOpen ? 250 : 60, variant: 'permanent' }));
			}
		}, [width, setDrawerConfig, drawerConfig.isOpen]);

		useEffect(() => {
			return () => {
				setDrawerConfig({ ...initialDrawerConfig });
			};
		}, []);
		return (
			<Provider
				value={{
					drawerConfig,
					setDrawerConfig,
					toggleDrawer,
					width
				}}
			>
				{props.children}
			</Provider>
		);
	})
);
