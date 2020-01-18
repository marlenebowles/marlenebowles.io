import React from 'react';
import { FlexBox } from '@computapars/flex';
import { Container } from '@computapars/layout';
import { H1, IntroText } from '@computapars/typography';
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
				<Button>View My Work</Button>
				<Button>View My Profile</Button>
			</FlexBox>
		</Container>
	</FlexBox>
);
