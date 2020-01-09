import React from 'react';
import { Container } from '@computapars/layout';
import { useRouter } from 'next/router';

export default function Project() {
	const router = useRouter();
	return (
		<Container>
			<h1>{router.query.id}</h1>
			Post
		</Container>
	);
}
