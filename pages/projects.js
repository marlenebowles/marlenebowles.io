import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Button, Heading, Box } from 'grommet';

const FeatureBox = styled(Box)`
	background-image: url('/carol-e1449867374669.jpg');
	height: 70px;
`;
export default () => (
	<Fragment>
		<Heading level={1} margin="none">
			Marlene Bowles
		</Heading>
		<FeatureBox></FeatureBox>
	</Fragment>
);
