import React from 'react';
import useFilter from './../components/hooks/useFilter';
import { Container } from '@computapars/layout';
import { musicProjects } from '../schema/';
import FeatureSection from '../components/FeatureSection';

export default () => {
	const [filter, setFilter, content] = useFilter(musicProjects);
	const choices = ['all', 'solo', 'bands'];
	return (
		<Container>
			{choices.map(item => (
				<button
					key={item}
					bg={item == filter ? 'black' : 'white'}
					onClick={() => {
						setFilter(item);
					}}
				>
					{item}
				</button>
			))}
			<FeatureSection fullCol={content.length < 3} content={content} />
		</Container>
	);
};
