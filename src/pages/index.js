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
				flexDirection="row"
				width={1}
				flexWrap="wrap"
			>
				<FlexBox width={[1, 1, 1, 1 / 3]} alignSelf="baseline">
					<SectionHeader color="white">Marlene Bowles.</SectionHeader>
				</FlexBox>
				<FlexBox
					width={[1, 1, 1, 2 / 3]}
					flexDirection={['column']}
					justifyContent="center"
					alignItems="flex-start"
					bg="charcoal"
				>
					<FlexBox
						flexDirection="column"
						padding={['md', 'md', 'xl', 'xl']}
					>
						<IntroText
							fontSize={['sm', 'md', 'lg', 'xl']}
							marginY="0"
							color="white"
						>
							Front End Developer / Full Time Nerd / MacrameMaker
							/ React Expert / Webpack Wrangler / NextJS
							Enthusiast / Musician / Cat Whisperer / History Buff
						</IntroText>
						<FlexBox marginY="sm" width={1} alignItems="center">
							<Link passHref href="/projects">
								<Button
									marginRight="sm"
									height={40}
									variant="transparent"
									as="a"
								>
									View My Work
								</Button>
							</Link>
							<Link passHref href="/about">
								<Button
									height={40}
									variant="transparent"
									as="a"
								>
									Contact Me
								</Button>
							</Link>
						</FlexBox>
					</FlexBox>
				</FlexBox>
			</FlexBox>
		</Container>
	</FlexBox>
);
