import React from 'react';
import { FlexBox } from '@computapars/flex';
import SectionHeader from './../components/SectionHeader';
import { Container } from '@computapars/layout';
import Link from 'next/link';

export default () => (
	<FlexBox flexDirection="column" height="100vh">
		<Container>
			<Link href="/projects">
				<a>
					<SectionHeader>Projects.</SectionHeader>
				</a>
			</Link>

			<Link href="/music">
				<a>
					<SectionHeader>Music.</SectionHeader>
				</a>
			</Link>

			<Link href="/about">
				<a>
					<SectionHeader>About.</SectionHeader>
				</a>
			</Link>
			<Link href="/contact">
				<a>
					<SectionHeader>Contact.</SectionHeader>
				</a>
			</Link>
		</Container>
	</FlexBox>
);
