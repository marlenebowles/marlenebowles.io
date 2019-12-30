import React from 'react';
import { Container } from '@computapars/layout';
import { H1 } from '@computapars/typography';
import { featuredProjects } from '../schema/';
import FeatureSection from '../components/FeatureSection';

export default () => (
	<Container>
		<H1
			letterSpacing="xs"
			style={{
				fontSize: '140px',
				zIndex: 1,
				position: 'relative',
			}}
			marginBottom={-26}
		>
			Projects.
		</H1>
		<FeatureSection content={featuredProjects} />
	</Container>
);
