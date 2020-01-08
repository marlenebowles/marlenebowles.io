import React from 'react';
import { FlexBox } from '@computapars/flex';
import SectionHeader from './../components/SectionHeader';
import FeatureSectionGrid from './../components/FeatureSectionGrid';
import { webProjects, musicProjects } from '../schema/';
import { Container } from '@computapars/layout';

export default () => (
	<FlexBox flexDirection="column" height="100vh">
		<Container>
			<SectionHeader>Projects.</SectionHeader>
			<div>View All</div>
			<FeatureSectionGrid content={webProjects} />
		</Container>
		<Container>
			<SectionHeader>Music</SectionHeader>
			<FeatureSectionGrid useExternal={false} content={musicProjects} />
		</Container>
		<Container>
			<SectionHeader>About</SectionHeader>
			<FeatureSectionGrid content={webProjects} />
		</Container>
		<Container>
			<SectionHeader>Contact</SectionHeader>
			<FeatureSectionGrid content={webProjects} />
		</Container>
	</FlexBox>
);
