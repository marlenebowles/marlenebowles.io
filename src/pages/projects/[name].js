import React from 'react';
import { Container } from '@computapars/layout';
import fetch from 'isomorphic-unfetch';

const Project = props => {
	console.log(props.name);
	return <Container>Post</Container>;
};

Project.getInitialProps = async function({ query }) {
	// pid = 'hello-nextjs'
	const { name } = query;
	const postContent = await fetch(
		`api/projects/${encodeURIComponent(name)}`
	).then(r => r.text());

	return { postContent };
};

export default Project;
