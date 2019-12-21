import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { Heading, Text, Grid } from 'grommet';

const FeatureBoxButton = styled.div`
	position: absolute;
	top: 0;
	right: 20px;
	padding: 17px 20px;
	background-color: #000;
	color: #fff;
	font-size: 13px;
	transform-origin: 0 0;
	will-change: transform, opacity;
	transform: scaleY(0) translateZ(0);
	transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
	font-family: Inter, Source Sans Pro, Helvetica Neue, Arial, sans-serif;
`;

const FeatureBoxButtonLabel = styled.span`
	transform: translateY(-15px);
	transition: transform 0.35s cubic-bezier(0.19, 1, 0.22, 1) 0.1s,
		opacity 0.35s cubic-bezier(0.19, 1, 0.22, 1) 0.1s;
	display: block;
	opacity: 0;
`;

const FeaturedBoxContentStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	padding: 20px;
	${props =>
		props && props.bgImage
			? css`
					background: url(${props.bgImage});
					background-position: 75% 50%;
					background-size: cover;
			  `
			: css`
					background-color: ${props.bgColor};
			  `}
	&:hover {
		${FeatureBoxButton} {
			transform: scaleY(1) translateZ(0);
			transition: transform 0.35s cubic-bezier(0.19, 1, 0.22, 1);
		}
		${FeatureBoxButtonLabel} {
			transform: translateY(0);
			opacity: 1;
		}
	}
`;

const FeatureBoxContent = props => {
	return (
		<Link href={props.href}>
			<FeaturedBoxContentStyle as="a" {...props}>
				<FeatureBoxButton>{props.hoverTag}</FeatureBoxButton>
				<Heading color="white" level={3}>
					{props.header}
				</Heading>
				<Text color="white" size="medium">
					{props.text}
				</Text>
			</FeaturedBoxContentStyle>
		</Link>
	);
};
export default FeatureBoxContent;
