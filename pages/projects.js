import React from 'react';
import useFilter from './../components/hooks/useFilter';
import { Container } from '@computapars/layout';
import { webProjects } from '../schema/';
import FeatureSection from '../components/FeatureSection';

export default () => {
	const [filter, setFilter, content] = useFilter(webProjects);
	const choices = ['all', 'react', 'MERN', 'node'];
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
