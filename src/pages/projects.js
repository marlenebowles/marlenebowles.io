import React from 'react';
import fetch from 'isomorphic-unfetch';

import { Container } from '@computapars/layout';
import { LinkButton } from '@computapars/button';
import { FlexBox } from '@computapars/flex';
import { ALT_COLOR_OPTIONS } from './../utils/constants';
import useFilter from './../hooks/useFilter';
import SectionHeader from '../components/SectionHeader';

import FeatureSectionGrid from '../components/FeatureSectionGrid';

const Projects = props => {
	const [filter, setFilter, content] = useFilter(props.data);
	const choices = ['all', 'react', 'MERN', 'node'];
	return (
		<Container>
			<FlexBox
				flexWrap="wrap"
				justifyContent="space-between"
				alignItems="flex-end"
			>
				<SectionHeader>Projects.</SectionHeader>
				<FlexBox flexWrap="wrap" marginY={['lg', 'lg', 'xs', 'xs']}>
					{choices.map((item, index) => (
						<LinkButton
							fontSize="xl"
							key={item}
							color={
								filter == item
									? 'white'
									: ALT_COLOR_OPTIONS[index]
							}
							bg={
								filter == item
									? ALT_COLOR_OPTIONS[index]
									: 'white'
							}
							onClick={() => {
								setFilter(item);
							}}
						>
							{item}.
						</LinkButton>
					))}
				</FlexBox>
			</FlexBox>
			<FeatureSectionGrid
				fullCol={content.length < 3}
				content={content}
			/>
		</Container>
	);
};

Projects.getInitialProps = async () => {
	const postContent = await fetch(`http://localhost:3000/api/projects`);
	const data = await postContent.json();
	return { data };
};

export default Projects;
