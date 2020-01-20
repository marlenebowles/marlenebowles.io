import React from 'react';
import fetch from 'isomorphic-unfetch';
import styled, { css } from 'styled-components';

import { Container } from '@computapars/layout';
import { LinkButton } from '@computapars/button';
import { FlexBox } from '@computapars/flex';
import useFilter from './../hooks/useFilter';
import SectionHeader from '../components/SectionHeader';

import FeatureSectionGrid from '../components/FeatureSectionGrid';

const FilterBox = styled(FlexBox)`
	${props => css`
		display: none;
		${props.theme.mediaQueries.md} {
			display: flex;
			flex-wrap: wrap;
		}
	`}
`;

const Projects = props => {
	const [filter, setFilter, content] = useFilter(props.data);
	const choices = ['all', 'react', 'node'];
	return (
		<Container>
			<FlexBox
				flexWrap="wrap"
				justifyContent="space-between"
				alignItems="flex-end"
			>
				<SectionHeader>Projects.</SectionHeader>
				<FilterBox flexWrap="wrap" marginY={['lg', 'lg', 'xs', 'xs']}>
					{choices.map((item, index) => (
						<LinkButton
							fontSize="xl"
							key={item}
							color={filter == item ? 'coral' : 'text'}
							onClick={() => {
								setFilter(item);
							}}
						>
							{item}.
						</LinkButton>
					))}
				</FilterBox>
			</FlexBox>
			<FeatureSectionGrid
				fullCol={content.length < 3}
				content={content}
			/>
		</Container>
	);
};

Projects.getInitialProps = async () => {
	const postContent = await fetch(`https://marlenebowles.io/api/projects`);
	const data = await postContent.json();
	return { data };
};

export default Projects;
