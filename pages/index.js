import React from 'react';
import { FlexBox } from '@computapars/flex';
import SectionHeader from './../components/SectionHeader';
import FeatureSection from './../components/FeatureSection';
import { webProjects, musicProjects } from '../schema/';
import { Container } from '@computapars/layout';

export default () => (
	<FlexBox flexDirection="column" height="100vh">
		<Container>
			<SectionHeader>Projects.</SectionHeader>
			<div>View All</div>
			<FeatureSection content={webProjects} />
		</Container>
		<Container>
			<SectionHeader>Music</SectionHeader>
			<FeatureSection content={musicProjects} />
		</Container>
		<Container>
			<SectionHeader>About</SectionHeader>
			<FeatureSection content={webProjects} />
		</Container>
		<Container>
			<SectionHeader>Contact</SectionHeader>
			<FeatureSection content={webProjects} />
		</Container>
	</FlexBox>
);
