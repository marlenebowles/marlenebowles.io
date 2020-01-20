import React from 'react';
import Link from 'next/link';

import { FlexBox } from '@computapars/flex';
import { Container } from '@computapars/layout';
import { IntroText } from '@computapars/typography';
import { Button } from '@computapars/button';

import SectionHeader from './../components/SectionHeader';
import TriangleBackground from './../components/TriangleBackground';
export default () => (
	<FlexBox alignItems="center" height="calc(100vh - 100px)">
		<TriangleBackground></TriangleBackground>
		<Container>
			<FlexBox
				alignItems="center"
				justifyContent="center"
				flexDirection="column"
				width={1}
				flexWrap="wrap"
			>
				<SectionHeader color="white">Marlene Bowles.</SectionHeader>
				<FlexBox
					bg="charcoal"
					width={[3 / 4]}
					padding="xl"
					flexDirection="column"
					justifyContent="center"
					alignItems="flex-start"
				>
					<IntroText marginTop="0" color="white">
						Front End Developer / Full Time Nerd / MacrameMaker /
						React Expert / Webpack Wrangler / NextJS Enthusiast /
						Musician / Cat Enthusiast / History Buff
					</IntroText>
					<Link passHref href="/projects">
						<Button variant="transparent" as="a">
							View My Work
						</Button>
					</Link>
					<Link passHref href="/about">
						<Button marginTop={'sm'} variant="transparent" as="a">
							Contact Me
						</Button>
					</Link>
				</FlexBox>
			</FlexBox>
		</Container>
	</FlexBox>
);
