import React from 'react';
import styled, { css } from 'styled-components';
import { typography, color } from 'styled-system';
import Link from 'next/link';

const FeatureButton = styled.div`
	position: absolute;
	top: 0;
	right: 20px;
	padding: 17px 20px;
	transform-origin: 0 0;
	will-change: transform, opacity;
	transform: scaleY(0) translateZ(0);
	transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
	${typography}
	${color}
`;

const FeatureHeader = styled.h3`
	transform: translate3D(0, 0, 0);
	transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	margin: 0 auto 60px;
	${typography}
	${color}
`;
const FeatureText = styled.p`
	transform: translate3D(0, 0, 0);
	transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	max-width: 500px;
	width: 80%;
	margin: 0 auto 60px;
	${typography}
	${color}
`;

const FeatureButtonLabel = styled.span`
	transform: translateY(-15px);
	transition: transform 0.35s cubic-bezier(0.19, 1, 0.22, 1) 0.1s,
		opacity 0.35s cubic-bezier(0.19, 1, 0.22, 1) 0.1s;
	display: block;
	opacity: 0;
`;

const FeatureBackground = styled.div`
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
const FeatureDivider = styled.div`
	display: block;
	position: relative;
	bottom: 0;
	right: 0;
	left: 0;
	height: 2px;
	background-color: currentColor;
	width: 60px;
	margin: 30px auto;
	transform: scale3D(1);
	transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	${color}
`;

const FeatureContentStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	padding: 20px;
	${color}
	&:hover {
		${FeatureButton} {
			transform: scaleY(1) translateZ(0);
		}
		${FeatureButtonLabel} {
			transform: scaleY(1.9) translateY(0);
			opacity: 1;
		}
		${FeatureBackground} {
			transform: scale3D(1.04, 1.04, 1);
		}
		${FeatureHeader} {
			transform: translate3D(0, -6px, 0);
		}
		${FeatureText} {
			transform: translate3D(0, 6px, 0);
		}
		${FeatureDivider} {
			transform: scale3D(1.5, 1.5, 1);
		}
	}
`;

const FeatureContent = props => {
	let conditionalProps = {};
	if (!props.useExternal) {
		conditionalProps.href = `/${props.section}/[id]${props.slug}`;
		conditionalProps.as = `/${props.section}/${props.slug}`;
	} else {
		conditionalProps.href = props.href;
	}
	return (
		<Link {...conditionalProps}>
			<FeatureContentStyle as="a" {...props}>
				{props.bgImage && <FeatureBackground {...props} />}
				<FeatureButton
					bg="black"
					color="white"
					fontFamily="primary"
					fontSize={12}
				>
					{props.hoverTag}
				</FeatureButton>
				<FeatureHeader
					color="white"
					fontSize="xxxl"
					fontWeight="regular"
					fontFamily="secondary"
					letterSpacing="sm"
				>
					{props.header}
				</FeatureHeader>
				{props.useDivider && <FeatureDivider color="white" />}
				<FeatureText color="white" fontFamily="primary">
					{props.text}
				</FeatureText>
			</FeatureContentStyle>
		</Link>
	);
};
export default FeatureContent;
