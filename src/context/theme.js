import React, { createContext, useEffect, useState } from 'react';

// material-ui
import useMediaQuery from '@material-ui/core/useMediaQuery';

// context
import { withAuthContext } from './auth';

// initial data
import { initialDrawerConfig } from './initial-data';

const { Provider, Consumer } = createContext();

export const withThemeContext = (Component) => (props) => (
	<Consumer>{(value) => <Component {...value} {...props} />}</Consumer>
);

export const ThemeProvider = withAuthContext(function ({ onLogout, ...props }) {
	const isMobile = useMediaQuery('(max-width:600px)');
	const isTablet = useMediaQuery('(max-width:800px)');
	const isDesktop = useMediaQuery('(min-width:801px)');
	const [drawerConfig, setDrawerConfig] = useState({ ...initialDrawerConfig });
	const toggleDrawer = () => {
		setDrawerConfig((prev) => ({ ...prev, isOpen: !prev.isOpen }));
	};

	useEffect(() => {
		if (isTablet) setDrawerConfig((prev) => ({ ...prev, width: 250, variant: 'temporary' }));
		if (isDesktop) setDrawerConfig((prev) => ({ ...prev, width: prev.isOpen ? 250 : 60, variant: 'permanent' }));
	}, [isMobile, isTablet, isDesktop, setDrawerConfig, drawerConfig.isOpen]);

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
				isMobile,
				isTablet,
				isDesktop,
				onLogout
			}}
		>
			{props.children}
		</Provider>
	);
});
