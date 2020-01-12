import React from 'react';
import styled, { css } from 'styled-components';
import FeatureContent from './FeatureContent';
import { COLOR_OPTIONS } from '../utils/constants';

const FeatureGrid = styled.div`
	display: grid;
	justify-items: center;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	${props => css`
		${props.theme.mediaQueries.md} {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: repeat(${props => props.repeatRow}, 1fr);
		}
	`}
`;

const FeatureGridItem = styled.div`
	display: grid;
	min-height: ${props => props.theme.sizes.minHeight[5]}px;
	position: relative;
	overflow: hidden;
	justify-self: stretch;
	${props =>
		props.fullCol &&
		css`
			${props.theme.mediaQueries.md} {
				grid-column-start: 1;
				grid-column-end: 3;
			}
		`}
`;

const FeatureSectionGrid = ({ ...props }) => {
	return (
		<FeatureGrid repeatRow={Math.floor(props.content.length / 3)}>
			{props.content.map((item, index) => (
				<FeatureGridItem
					key={index}
					fullCol={index % 3 == 0 || props.fullCol}
				>
					<FeatureContent
						key={index}
						bg={COLOR_OPTIONS[index]}
						data={item}
					/>
				</FeatureGridItem>
			))}
		</FeatureGrid>
	);
};

export default FeatureSectionGrid;
