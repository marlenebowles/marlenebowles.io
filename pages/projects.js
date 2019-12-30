import React from 'react';
import { Container } from '@computapars/layout';
import { H1 } from '@computapars/typography';
import { featuredProjects } from '../schema/';
import FeatureSection from '../components/FeatureSection';

export default () => (
	<Container>
		<H1 level={1} margin="none">
			Projects
		</H1>
		<FeatureSection content={featuredProjects} />
	</Container>
);
