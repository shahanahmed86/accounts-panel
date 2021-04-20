import React from 'react';
import { withThemeContext } from '../../context';

function MainComponent({ drawerConfig, width }) {
	return (
		<div
			className='transition-apply'
			style={
				width === 'xs' || width === 'sm'
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
