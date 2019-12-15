import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Box, Grid } from 'grommet';
const gridRowValues = '500px 400px 350px';

const wrapInRepeat = (repeat, values) =>
	`
        repeat(${repeat}, ${values});
    `;

const FeatureBoxLayout = styled.div`
	display: grid;
	grid-template-rows: ${props =>
		props.length && props.length % 4 > 0
			? wrapInRepeat(props.length % 4, gridRowValues)
			: gridRowValues};
`;

const FeatureBoxes = ({ ...props }) => {
	return (
		<FeatureBoxLayout length={props.content && props.content.length}>
			<Box background="#ff7800">cats</Box>
			<Box background="light-5">dogs</Box>
			<Box background="light-2">moose</Box>
			<Box background="light-2">moose</Box>
			<Box background="light-2">moose</Box>
			<Box background="light-2">moose</Box>
		</FeatureBoxLayout>
	);
};

export default FeatureBoxes;
