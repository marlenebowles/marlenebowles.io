import React, { Fragment } from 'react';
import Nav from '../components/Nav';
import { projects } from '../schema/';
import FeatureSection from '../components/FeatureSection';

export default () => (
	<Fragment>
		<Nav />
		<div level={1} margin="none">
			Projects
		</div>
		<FeatureSection content={projects}></FeatureSection>
	</Fragment>
);
