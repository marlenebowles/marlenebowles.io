import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';
import { FlexBox } from '@computapars/flex';
const NavBackground = styled('nav')`
	position: absolute;
	top: 2.7vmin;
	left: 2.8vmin;
	z-index: 2004;
	outline: none;
	width: 100%;
	padding: 10px;
`;

const leftStyles = {
	background: 'transparent',
	borderTop: '15px solid transparent',
	borderBottom: '15px solid transparent',
	borderLeft: '15px solid green',
	width: 0,
	height: 0,
	margin: 'auto',
};
const TextStyle = styled('text')`
	font-family: ${props => props.theme.fonts.primary};
	font-weight: ${props => props.theme.fontWeights.bold};
`;
const rightStyles = {
	width: 100,
	height: 100,
	margin: 'auto',
};

export const Nav = () => (
	<NavBackground>
		<motion.svg style={rightStyles} width="100" height="100">
			<path fill="#ff7800" d="M 72 60 L 36 60 L 36 0 Z"></path>
			<path d="M 36 60 L 0 60 L 36 0 Z "></path>
			<TextStyle fill="white" opacity="0.5" x="20" y="45">
				M
			</TextStyle>
			<TextStyle fill="white" x="40" y="45">
				B
			</TextStyle>
		</motion.svg>
	</NavBackground>
);
