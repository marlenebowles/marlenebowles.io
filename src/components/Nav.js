import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavBackground = styled('nav')`
	position: absolute;
	top: 2.7vmin;
	left: 2.8vmin;
	z-index: 2004;
	outline: none;
	width: 23px;
	padding: 10px;
`;
export default () => (
	<NavBackground>
		<Link href="/">
			<a>Home</a>
		</Link>
		<Link href="/about">
			<a>About</a>
		</Link>
		<Link href="/projects">
			<a>Projects</a>
		</Link>
		<Link href="/music">
			<a>Music</a>
		</Link>
		<Link href="/contact">
			<a>Contact</a>
		</Link>
	</NavBackground>
);
