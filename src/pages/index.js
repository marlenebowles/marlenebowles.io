import React from 'react';
import Link from 'next/link';

import { FlexBox } from '@computapars/flex';
import { Container } from '@computapars/layout';
import { IntroText } from '@computapars/typography';
import { Button } from '@computapars/button';

import SectionHeader from './../components/SectionHeader';
import TriangleBackground from './../components/TriangleBackground';
export default () => (
	<FlexBox flexDirection="column" height="100vh">
		<TriangleBackground></TriangleBackground>
		<Container>
			<FlexBox width={[1 / 2]}>
				<SectionHeader>Hello, I'm Marlene Bowles.</SectionHeader>
			</FlexBox>
			<FlexBox flexDirection="column" alignItems="flex-start">
				<IntroText>I'm a Front End Developer.</IntroText>
				<Link passHref href="/projects">
					<Button variant="primary" as="a">
						View My Work
					</Button>
				</Link>
				<Link passHref href="/about">
					<Button marginTop={'sm'} variant="primary" as="a">
						Contact Me
					</Button>
				</Link>
			</FlexBox>
		</Container>
	</FlexBox>
);
