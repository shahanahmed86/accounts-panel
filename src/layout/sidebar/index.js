import React, { Fragment, useEffect, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { withThemeContext } from '../../context';
import routes from '../../routes';
import { Navigation } from '../../components';
import Collapse from '@material-ui/core/Collapse';
import { useLocation } from 'react-router-dom';

function SideBar({ drawerConfig, toggleDrawer, isMobile, isTablet }) {
	const location = useLocation();

	const [isExpand, setExpand] = useState(-1);
	const toggleExpand = (i) => setExpand((prev) => (prev === i ? -1 : i));

	useEffect(() => {
		const ind = routes.findIndex((route) => {
			return (
				route.path === location.pathname || (route.items && route.items.some((item) => item.path === location.pathname))
			);
		});
		toggleExpand(ind);
		return () => {
			setExpand(-1);
		};
	}, [location]);
	return (
		<Drawer
			anchor='left'
			open={drawerConfig.isOpen}
			onClose={toggleDrawer}
			variant={drawerConfig.variant}
			transitionDuration={500}
		>
			<div style={{ width: drawerConfig.width }} className='transition-apply no-wrap'>
				<div
					style={{ height: isMobile ? 55 : 63 }}
					className={`display-flex align-flex-center${drawerConfig.isOpen ? ' justify-flex-end' : ''}`}
				>
					{!isTablet && (
						<IconButton
							edge='start'
							color='inherit'
							aria-label='menu'
							onClick={toggleDrawer}
							style={!drawerConfig.isOpen ? { margin: 'auto' } : {}}
						>
							{drawerConfig.isOpen ? <MenuOpenIcon /> : <MenuIcon />}
						</IconButton>
					)}
				</div>
				<Divider />
				<List>
					{routes.map((parentRoute, i) => (
						<Fragment key={i}>
							<Navigation {...parentRoute} isExpand={isExpand} toggleExpand={() => toggleExpand(i)} />
							{parentRoute.items && (
								<Collapse in={isExpand === i} timeout='auto' unmountOnExit>
									<List>
										{parentRoute.items.map((childRoute, j) => (
											<Navigation key={j} {...childRoute} />
										))}
									</List>
								</Collapse>
							)}
						</Fragment>
					))}
				</List>
				<Divider />
			</div>
		</Drawer>
	);
}

export default withThemeContext(SideBar);
