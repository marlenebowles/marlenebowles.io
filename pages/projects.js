import React from 'react';
import { Container } from '@computapars/layout';
import { featuredProjects } from '../schema/';
import FeatureSection from '../components/FeatureSection';
import { FlexBox } from '@computapars/flex';

export default () => (
	<Container>
		<FlexBox>
			<div>All</div>
			<div>React</div>
			<div>MERN</div>
			<div>Node</div>
		</FlexBox>
		<FeatureSection content={featuredProjects} />
	</Container>
);
