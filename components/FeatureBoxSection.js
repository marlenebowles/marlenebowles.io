import React from 'react';
import styled, { css } from 'styled-components';
import { ResponsiveContext } from 'grommet';
import FeatureBoxContent from './FeatureBoxContent';

const FeatureBoxGrid = styled.div`
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

const FeatureBoxGridItem = styled.div`
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

const FeatureBoxes = ({ ...props }) => {
	return (
		<ResponsiveContext.Consumer>
			{size => (
				<FeatureBoxGrid
					repeatRow={Math.floor(props.content.length / 3)}
					size={size}
				>
					{props.content.map((item, i) => (
						<FeatureBoxGridItem
							key={i}
							fullCol={i % 3 == 0}
							size={size}
						>
							<FeatureBoxContent
								key={i}
								{...item}
							></FeatureBoxContent>
						</FeatureBoxGridItem>
					))}
				</FeatureBoxGrid>
			)}
		</ResponsiveContext.Consumer>
	);
};

export default FeatureBoxes;
