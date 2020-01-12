import React from 'react';
import { Container } from '@computapars/layout';
import { FlexBox } from '@computapars/flex';
export default () => (
	<FlexBox flexDirection="column" height="100vh">
		<Container>
			<FlexBox 
				width={[1 / 2, 1 ]}
				flexDirection="row">
				<FlexBox
					bg="charcoal"
				>contact me Left</FlexBox>
				<FlexBox>Right</FlexBox>
			</FlexBox>
		</Container>
	</FlexBox>
);
