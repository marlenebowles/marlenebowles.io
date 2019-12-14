import React, { Fragment } from 'react';
import { Text, Heading, Box, Grid } from 'grommet';

export default () => (
	<Fragment>
		<Grid fill={true}>
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
					<Text color="white" size="xxlarge">
						Coming Soon...
					</Text>
				</Box>
			</Box>
		</Grid>
	</Fragment>
);