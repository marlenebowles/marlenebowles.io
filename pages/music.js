import React from 'react';
import useFilter from './../components/hooks/useFilter';
import { Container } from '@computapars/layout';
import { musicProjects } from '../schema/';
import FeatureSectionGrid from '../components/FeatureSectionGrid';
import { LinkButton } from '@computapars/button';
import { COLOR_OPTIONS } from './../utils/constants';

export default () => {
	const [filter, setFilter, content] = useFilter(musicProjects);
	const choices = ['all', 'solo', 'bands'];
	return (
		<Container>
			{choices.map(item => (
				<LinkButton
					key={item}
					color={filter == item ? 'white' : COLOR_OPTIONS[index]}
					bg={filter == item ?  COLOR_OPTIONS[index]: 'white'}
					onClick={() => {
						setFilter(item);
					}}
				>
					{item}
				</LinkButton>
			))}
			<FeatureSectionGrid 
				fullCol={content.length < 3}
				content={content}
				useExternal
			/>
		</Container>
	);
};
