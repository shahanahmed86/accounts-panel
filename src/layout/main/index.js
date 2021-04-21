import React from 'react';
import { withThemeContext } from '../../context';

function MainComponent({ drawerConfig, isTablet }) {
	return (
		<div
			className='transition-apply'
			style={
				isTablet
					? {}
					: {
							marginLeft: drawerConfig.width,
							width: `calc(100% - ${drawerConfig.width}px)`
					  }
			}
		>
			<h3>Main Component</h3>
		</div>
	);
}

export default withThemeContext(MainComponent);
