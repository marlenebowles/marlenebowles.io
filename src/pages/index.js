import React from 'react';
import { FlexBox } from '@computapars/flex';
import SectionHeader from './../components/SectionHeader';
import FeatureSectionGrid from './../components/FeatureSectionGrid';
import { webProjects, musicProjects } from '../db/';
import { Container } from '@computapars/layout';
import { LinkButton } from '@computapars/button';
export default () => (
	<FlexBox flexDirection="column" height="100vh">
		<Container>
			<FlexBox alignItems="flex-end" flexDirection="row" width={[1]}>
				<FlexBox>
					<SectionHeader>Projects.</SectionHeader>
				</FlexBox>
				<FlexBox width={1} justifyContent="flex-end">
					<LinkButton>View All</LinkButton>
				</FlexBox>
			</FlexBox>
			<FeatureSectionGrid section="projects" content={webProjects} />
		</Container>
		<Container>
			<FlexBox>
				<SectionHeader>Music.</SectionHeader>
			</FlexBox>
			<FlexBox width={1} justifyContent="flex-end">
				<LinkButton>View All</LinkButton>
			</FlexBox>
			<FeatureSectionGrid
				section="music"
				useExternal={false}
				content={musicProjects}
			/>
		</Container>
		<Container>
			<SectionHeader>About</SectionHeader>
		</Container>
		<Container>
			<SectionHeader>Contact</SectionHeader>
		</Container>
	</FlexBox>
);
