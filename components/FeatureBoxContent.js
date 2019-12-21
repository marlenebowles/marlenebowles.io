import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { Heading, Text } from 'grommet';

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

const FeatureBoxHeader = styled(Heading)`
	transform: translate3D(0, 0, 0);
	transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	margin: 0 auto 60px;
`;
const FeatureBoxText = styled(Text)`
	transform: translate3D(0, 0, 0);
	transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	max-width: 500px;
	width: 80%;
	margin: 0 auto 60px;
`;
const FeatureBoxButtonLabel = styled.span`
	transform: translateY(-15px);
	transition: transform 0.35s cubic-bezier(0.19, 1, 0.22, 1) 0.1s,
		opacity 0.35s cubic-bezier(0.19, 1, 0.22, 1) 0.1s;
	display: block;
	opacity: 0;
`;

const FeatureBoxBackground = styled.div`
	background: url(${props => props.bgImage});
	background-position: 75% 50%;
	background-size: cover;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	transform: scale3D(1);
	transition: transform 0.35s cubic-bezier(0.19, 1, 0.22, 1) 0.1s;
`;
const FeatureBoxDivider = styled.div`
	display: block;
	position: relative;
	bottom: 0;
	right: 0;
	left: 0;
	height: 2px;
	background-color: currentColor;
	width: 60px;
	margin: 60px auto 30px;
	transform: scale3D(1);
	transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const FeaturedBoxContentStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	padding: 20px;
	${props =>
		props.bgColor &&
		css`
			background-color: ${props.bgColor};
		`}

	&:hover {
		${FeatureBoxButton} {
			transform: scaleY(1) translateZ(0);
		}
		${FeatureBoxButtonLabel} {
			transform: scaleY(1.9) translateY(0);
			opacity: 1;
		}
		${FeatureBoxBackground} {
			transform: scale3D(1.04, 1.04, 1);
		}
		${FeatureBoxHeader} {
			transform: translate3D(0, -6px, 0);
		}
		${FeatureBoxText} {
			transform: translate3D(0, 6px, 0);
		}
		${FeatureBoxDivider} {
			transform: scale3D(1.5, 1.5, 1);
		}
	}
`;

const FeatureBoxContent = props => {
	return (
		<Link href={props.href}>
			<FeaturedBoxContentStyle as="a" {...props}>
				{props.bgImage && <FeatureBoxBackground {...props} />}
				<FeatureBoxButton>{props.hoverTag}</FeatureBoxButton>
				<FeatureBoxHeader color="white" level={2}>
					{props.header}
				</FeatureBoxHeader>
				{props.useDivider && <FeatureBoxDivider />}
				<FeatureBoxText color="white" size="medium">
					{props.text}
				</FeatureBoxText>
			</FeaturedBoxContentStyle>
		</Link>
	);
};
export default FeatureBoxContent;
