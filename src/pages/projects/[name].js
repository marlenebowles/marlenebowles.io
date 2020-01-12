import React from 'react';
import fetch from 'isomorphic-unfetch';

import { Container } from '@computapars/layout';
import { H1 } from '@computapars/typography';

const Project = props => {
	return (
		<Container>
			<H1>{props.data.name}</H1>
		</Container>
	);
};

Project.getInitialProps = async ({ query }) => {
	const { name } = query;
	const postContent = await fetch(
		`http://localhost:3000/api/projects/${encodeURIComponent(name)}`
	);
	const data = await postContent.json();

	return { data };
};

export default Project;
