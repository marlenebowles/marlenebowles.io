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

const TextStyle = styled('text')`
	font-family: ${props => props.theme.fonts.primary};
	font-weight: ${props => props.theme.fontWeights.bold};
`;
const rightStyles = {
	width: 100,
	height: 100,
	margin: '0 auto',
};

export const Nav = () => (
	<NavBackground>
		<Link href="/">
			<a>
				<motion.svg
					style={rightStyles}
					whileHover={{ scale: 1.2 }}
  					whileTap={{ scale: 0.8 }}
				>
					<motion.path
						initial={{
							opacity: 0,
							y: 50
						}}
						animate={{
							opacity: 1,
							y: 0
						}}
						d="M 72 60 L 36 60 L 36 0 Z" 
						fill="var(--animation-left)"
						opacity="0.5"
					>
					</motion.path>
					<motion.path
						d="M 36 60 L 0 60 L 36 0 Z"
						fill="var(--animation-left)"
					>
					</motion.path>
					<TextStyle fill="white" opacity="0.5" x="20" y="45">
						M
					</TextStyle>
					<TextStyle fill="white" x="40" y="45">
						B
					</TextStyle>
					
				</motion.svg>
			</a>
		</Link>
	</NavBackground>
);
