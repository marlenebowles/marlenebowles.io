import React from 'react';
import fetch from 'isomorphic-unfetch';

import useFilter from './../hooks/useFilter';
import { ALT_COLOR_OPTIONS } from './../utils/constants';
import { FlexBox } from '@computapars/flex';

import { Container } from '@computapars/layout';
import { LinkButton } from '@computapars/button';
import FeatureSectionGrid from '../components/FeatureSectionGrid';
import SectionHeader from '../components/SectionHeader';

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
				<FlexBox flexWrap="wrap" mt={[10, 0]} mb={[0, 10]}>
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

Music.getInitialProps = async () => {
	const postContent = await fetch(`http://localhost:3000/api/music`);
	const data = await postContent.json();
	return { data };
};

export default Music;
