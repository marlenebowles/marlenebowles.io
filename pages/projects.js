import React, { Fragment } from 'react';
import { Heading, Box } from 'grommet';
import Nav from '../components/Nav';
import { projects } from '../schema/';
import FeatureSection from '../components/FeatureSection';

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
		<FeatureSection content={projects}></FeatureSection>
	</Fragment>
);
