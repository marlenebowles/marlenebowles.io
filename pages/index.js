import React, { Fragment } from 'react';
import { Text, Heading, Box, Grid } from 'grommet';
import Link from 'next/link';
import Nav from '../components/Nav';

export default () => (
	<Fragment>
		<Grid fill={true}>
			<Nav />
			<Box
				direction="column"
				justify="center"
				align="center"
				background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
			>
				<Box>
					<Heading color="white" level={1} margin="none">
						Marlene Bowles
					</Heading>
				</Box>
				<Box>
					<Heading level={4} color="white" size="xlarge">
						Coming Soon...
					</Heading>
				</Box>
			</Box>
		</Grid>
	</Fragment>
);
