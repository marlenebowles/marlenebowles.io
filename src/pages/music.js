import React from 'react';
import fetch from 'isomorphic-unfetch';
import styled, { css } from 'styled-components';

import useFilter from './../hooks/useFilter';
import { FlexBox } from '@computapars/flex';

import { Container } from '@computapars/layout';
import { LinkButton } from '@computapars/button';
import FeatureSectionGrid from '../components/FeatureSectionGrid';
import SectionHeader from '../components/SectionHeader';

const FilterBox = styled(FlexBox)`
	${props => css`
		display: none;
		${props.theme.mediaQueries.md} {
			display: flex;
			flex-wrap: wrap;
		}
	`}
`;
const Music = props => {
	const [filter, setFilter, content] = useFilter(props.data);
	const choices = ['all', 'solo', 'bands'];
	return (
		<Container>
			<FlexBox
				flexWrap="wrap"
				justifyContent="space-between"
				alignItems="flex-end"
			>
				<SectionHeader>Music.</SectionHeader>
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

Music.getInitialProps = async () => {
	const postContent = await fetch(`http://marlenebowles.io/api/music`);
	const data = await postContent.json();
	return { data };
};

export default Music;
