import React, { Fragment } from 'react';
import { Box, Grid } from 'grommet';

// props to support
// larger feature
const FeatureBoxItem = ({ header, text, href, hoverTag, bgImage, bgColor }) => {
	return (
		<Fragment>
			<div>{header}</div>
			<div>{text}</div>
		</Fragment>
	);
};
export default FeatureBoxItem;
