import React from 'react';
import { FlexBox } from '@computapars/flex';
import { H1, H2 } from '@computapars/typography';
export default () => (
	<FlexBox
		flexDirection="column"
		height="100vh"
		style={{
			background:
				'linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)',
		}}
		justifyContent="center"
		alignContent="center"
		alignItems="center"
	>
		<div>
			<H1 color="white" as="h1">
				Marlene Bowles
			</H1>
		</div>
		<div>
			<H2 color="white" mt={0} fontFamily="secondary">
				Coming Soon...
			</H2>
		</div>
	</FlexBox>
);
