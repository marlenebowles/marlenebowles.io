import React from 'react';
import styled, { css } from 'styled-components';
import FeatureContent from './FeatureContent';

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

const FeatureSection = ({ ...props }) => {
	return (
		<FeatureGrid repeatRow={Math.floor(props.content.length / 3)}>
			{props.content.map((item, i) => (
				<FeatureGridItem key={i} fullCol={i % 3 == 0 || props.fullCol}>
					<FeatureContent key={i} {...item}></FeatureContent>
				</FeatureGridItem>
			))}
		</FeatureGrid>
	);
};

export default FeatureSection;
