import React, { Fragment } from 'react';
import { Heading, Box } from 'grommet';
import Nav from '../components/Nav';
import { projects } from '../schema/';
import FeatureBoxSection from '../components/FeatureBoxSection';

// Nav
// Main
// Footer

/**
 * Main
 *
 * Featured
 * Side | Side
 * Third
 * Side | Side
 */

export default () => (
	<Fragment>
		<Nav />
		<Heading level={1} margin="none">
			Projects
		</Heading>
		<FeatureBoxSection content={projects}></FeatureBoxSection>
	</Fragment>
);
