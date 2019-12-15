import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Box, Grid } from 'grommet';
import FeatureBoxItem from './FeatureBoxItem';
const gridRowValues = '500px 400px 350px';

const wrapInRepeat = (repeat, values) =>
	`
        repeat(${repeat}, ${values});
    `;

const FeatureBoxLayout = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 500px 400px 350px;
  	grid-auto-flow: row;
`;

const FeatureBoxGrid = styled.div`
	${props => (props && props.wholeLine) && css`
		grid-column: 1 / 2;
		grid-row: 1 / 2;
	`}
	
`;

const FeatureBoxes = ({ ...props }) => {
	return (
		<FeatureBoxLayout>
			{props.content.map((item, i) => {
				return (
					<FeatureBoxGrid key={i} wholeLine={i == 0}>
						<FeatureBoxItem key={i} {...item} />
					</FeatureBoxGrid>
					)
				;
			})}
		</FeatureBoxLayout>
	);
};

export default FeatureBoxes;
