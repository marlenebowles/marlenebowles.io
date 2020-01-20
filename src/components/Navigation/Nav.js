import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';
import { FlexBox } from '@computapars/flex';
import SideBar from './SideBar';

const NavBackground = styled('nav')`
	z-index: 4;
	outline: none;
	width: 100%;
	display: flex;
	flex-direction: column;
	background: transparent;
	position: fixed;
`;

const getVariant = strokeColor => ({
	hidden: {
		strokeWidth: 0,
		stroke: strokeColor,
	},
	show: {
		stroke: strokeColor,
		strokeWidth: 15,
		transition: {
			staggerDirection: -1,
			duration: 2,
		},
	},
});
export const Nav = props => (
	<NavBackground>
		<SideBar />
		<FlexBox justifyContent="center">
			<Link href="/">
				<a>
					<motion.svg
						width="100"
						height="60"
						viewBox="0 0 90 175"
						fill="none"
					>
						<motion.path
							d="M59.5 151H1L61 2L118 151H59.5ZM59.5 151L118 2L180 151H59.5Z"
							variants={getVariant('#2E4057')}
							initial="hidden"
							animate="show"
						/>
					</motion.svg>
					<motion.svg
						width="30"
						height="60"
						viewBox="0 0 68 175"
						fill="none"
					>
						<motion.path
							d="M44 150H1V73.9479V1H44L67 33.0764L18 74.4653L67 123.097L44 150Z"
							variants={getVariant('#FF6B5E')}
							initial="hidden"
							animate="show"
						/>
					</motion.svg>
				</a>
			</Link>
		</FlexBox>
	</NavBackground>
);
