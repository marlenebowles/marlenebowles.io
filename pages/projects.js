import React, { Fragment } from 'react';
import { H1 } from '@computapars/typography';
import { featuredProjects } from '../schema/';
import FeatureSection from '../components/FeatureSection';

export default () => (
	<Fragment>
		<H1 level={1} margin="none">
			Projects
		</H1>
		<FeatureSection content={featuredProjects} />
	</Fragment>
);
