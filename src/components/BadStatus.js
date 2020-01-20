import React from 'react';
import Link from 'next/link';
import { Container } from '@computapars/layout';
import { H1, Text, IntroText, H5 } from '@computapars/typography';
import { FlexBox } from '@computapars/flex';
export default () => (
	<>
		<FlexBox
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			height={['100vh']}
			bg="charcoal"
		>
			<Container>
				<H1>Sorry</H1>
				<IntroText fontSize={['sm', 'md', 'lg', 'xl']}>
					There seems to be an issue with the url you requested.
				</IntroText>
				<Link href="/">
					<a>Go Back Home</a>
				</Link>
			</Container>
		</FlexBox>
	</>
);
