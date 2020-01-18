import React from 'react';
import { FlexBox } from '@computapars/flex';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Background = styled('div')`
	position: absolute;
	top: 90px;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
`;
const Triangle = styled('div')`
	width: 0;
	height: 0;
	margin-left: -500px;
	border-width: 500px;
	border-top-width: 0;
	border-style: solid;
	border-left-color: yellow;
	border-right-color: red;
	border-bottom-color: #779aab;
	border-top-color: pink;
	box-sizing: content-box;
`;
const TriangleUp = styled(motion.div)`
	width: 25%;
	height: 0;
	padding-left: 25%;
	padding-bottom: 25%;
	overflow: hidden;
	outline: 1px solid red;
	box-sizing: content-box;
`;

const TriangleRight = styled('div')`
	width: 0;
	height: 0;
	padding-top: 25%;
	padding-bottom: 25%;
	padding-left: 25%;
	overflow: hidden;
`;
const TriangleRightBase = styled('div')`
	width: 0;
	height: 0;
	margin-top: -500px;
	margin-left: -500px;
	border-top: 500px solid transparent;
	border-bottom: 500px solid transparent;
	border-left: 500px solid #4679bd;
`;
const TriangleRightB = styled(TriangleRightBase)`
	border-left: 500px solid white;
	position: relative;
	top: -500px;
	left: -1px;
`;
const TriangleRightA = styled(TriangleRightBase)`
	border-left: 500px solid #4679bd;
`;
const ArrowBox = styled('div')`
	border: 1px solid #4679bd;
	padding-bottom: 50%;
	height: 0;
	float: left;
	padding-left: 55%;
	border-right-color: transparent;
`;

export default () => (
	<Background>
		<ArrowBox></ArrowBox>
		<TriangleRight>
			<TriangleRightA></TriangleRightA>
			<TriangleRightB></TriangleRightB>
		</TriangleRight>
		<TriangleUp>
			<Triangle />
		</TriangleUp>
	</Background>
);
