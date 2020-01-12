import React from 'react';
import { Container } from '@computapars/layout';
import fetch from 'isomorphic-unfetch';

const Project = props => {
	console.log(props);
	return <Container>Post</Container>;
};

Project.getInitialProps = async ({ query }) => {
	// pid = 'hello-nextjs'
	console.log(query);
	const { name } = query;
	const postContent = await fetch(
		`http://localhost:3000/api/projects/${encodeURIComponent(name)}`
	);
	const data = await postContent.json();

	return { data };
};

export default Project;
