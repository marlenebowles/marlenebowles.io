import React from 'react';
import useFilter from './../hooks/useFilter';
import { Container } from '@computapars/layout';
import { webProjects } from '../db/';
import FeatureSectionGrid from '../components/FeatureSectionGrid';
import { LinkButton } from '@computapars/button';
import { ALT_COLOR_OPTIONS } from './../utils/constants';

export default () => {
	const [filter, setFilter, content] = useFilter(webProjects);
	const choices = ['all', 'react', 'MERN', 'node'];
	return (
		<Container>
			{choices.map((item, index) => (
				<LinkButton
					key={item}
					color={filter == item ? 'white' : ALT_COLOR_OPTIONS[index]}
					bg={filter == item ? ALT_COLOR_OPTIONS[index] : 'white'}
					onClick={() => {
						setFilter(item);
					}}
				>
					{item}
				</LinkButton>
			))}
			<FeatureSectionGrid
				fullCol={content.length < 3}
				useExternal
				content={content}
			/>
		</Container>
	);
};
