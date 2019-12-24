import React from 'react';
import styled, { css } from 'styled-components';
import FeatureContent from './FeatureContent';

const FeatureGrid = styled.div`
	display: grid;
	justify-items: center;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	${props =>
		(props.size == 'medium' || props.size == 'large') &&
		css`
			grid-template-columns: 1fr 1fr;
			grid-template-rows: repeat(${props => props.repeatRow}, 1fr);
		`}
`;

const FeatureGridItem = styled.div`
	display: grid;
	min-height: 500px;
	position: relative;
	overflow: hidden;
	justify-self: stretch;
	${props =>
		((props.fullCol && props.size == 'medium') ||
			(props.fullCol && props.size == 'large')) &&
		css`
			grid-column-start: 1;
			grid-column-end: 3;
		`}
`;

const FeatureSection = ({ ...props }) => {
	return (
		<FeatureGrid
			repeatRow={Math.floor(props.content.length / 3)}
			size={'sm'}
		>
			{props.content.map((item, i) => (
				<FeatureGridItem key={i} fullCol={i % 3 == 0} size={'sm'}>
					<FeatureContent key={i} {...item}></FeatureContent>
				</FeatureGridItem>
			))}
		</FeatureGrid>
	);
};

export default FeatureSection;
