import React, { Fragment } from 'react';
import { Box, Grid } from 'grommet';
import FeatureBoxItem from './FeatureBoxItem';

const FeatureBoxes = ({ content }) => (
	<Fragment>
		{content.map((item, i) => (
			<FeatureBoxItem key={i} {...item}></FeatureBoxItem>
		))}
	</Fragment>
);

export default FeatureBoxes;
