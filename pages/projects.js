import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Heading, Box } from 'grommet';
import Nav from '../components/Nav';
import { projects } from '../schema/';
import FeatureBoxes from '../components/FeatureBoxes';

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
		<FeatureBoxes content={projects}></FeatureBoxes>
	</Fragment>
);
